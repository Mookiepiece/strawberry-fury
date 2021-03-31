import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncValidator from 'async-validator';
import { RuleItem } from 'async-validator';
import { FormContext } from './FormContext';
import { useEventCallback } from 'starfall/_utils/useEventCallback';
import clsx from 'clsx';
import { useFirstMountState } from 'react-use';

export function getProp(obj: Record<string, unknown>, pathes: string[]): unknown {
  return pathes.reduce((tempObj, k) => {
    if (k in tempObj) {
      return tempObj[k] as Record<string, unknown>;
    } else {
      throw new Error(`[ST form] cannot get value by ${pathes} on object ${obj}`);
    }
  }, obj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <T extends (...any: any[]) => any>(func: T, delay: number): T => {
  let timeout: NodeJS.Timeout;
  return (((...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as unknown) as T;
};

/**
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const throttleOneByOne = <T extends (...any: any[]) => Promise<any>>(func: T): (() => void) => {
  let relay = false;
  let executing = false;

  const wrappedFunc = () => {
    if (executing) {
      relay = true;
      return;
    }
    executing = true;
    return func().then(v => {
      executing = false;
      if (relay) {
        relay = false;
        wrappedFunc();
      }
      return v;
    });
  };

  return wrappedFunc;
};

export type ValidateStatus = {
  state: 'validating' | 'success' | 'error' | '';
  message: string;
};

// error messages has a exit animation so we dont reset messages
export type ValidateStatusParam =
  | 'validating'
  | ''
  | 'success'
  | {
      state: 'error';
      message: string;
    };

export type FormItemFnChildren = React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  validate: (method: 'change' | 'force') => Promise<void>;
  validateStatus: ValidateStatus;
  setValidateStatus: (s: ValidateStatusParam) => void;
  clearValidate: () => void;
  cancelValidate: () => void;
}>;

export type FormItemProps = {
  name: string;
  rules?: RuleItem | RuleItem[];
  label: string;
  children: React.ReactElement | FormItemFnChildren;
};

const FormContent: React.FC = ({ children }) => {
  return <div className="st-form-content">{children}</div>;
};

const FormItem: React.FC<FormItemProps> = ({ rules = [], label, name, children }) => {
  const { value: formValue, setValue, register, unregister } = useContext(FormContext);

  const pathes = useMemo(() => {
    return name.replace(/\[(\w+)\]/g, '.$1').split('.');
  }, [name]);

  const value = getProp(formValue, pathes);

  const [validateStatus, _setValidateStatus] = useState<ValidateStatus>({
    state: '',
    message: '',
  });
  const setValidateStatus = useCallback((validateStatusParam: ValidateStatusParam) => {
    if (typeof validateStatusParam === 'string') {
      _setValidateStatus(({ message }) => ({
        state: validateStatusParam,
        message,
      }));
    } else {
      _setValidateStatus(validateStatusParam);
    }
  }, []);

  const touchedRef = useRef(false);

  const validateKey = useRef(0);
  const nextTickToValidate = useRef(false);
  const [nextTickToValidateValue, setNextTickToValidateValue] = useState<boolean>(false);

  const cancelValidate = useCallback(() => {
    ++validateKey.current;
  }, []);

  const validate = useEventCallback(async (method: 'change' | 'force') => {
    const validator = new AsyncValidator({ [name]: rules });

    if (method === 'change' && validateStatus.state === 'validating') {
      nextTickToValidate.current = true;
      return;
    }
    if (method === 'force') {
      nextTickToValidate.current = false;
    }
    const key = ++validateKey.current;

    try {
      setValidateStatus('validating');
      await validator.validate({ [name]: value }, { firstFields: true });
      if (key === validateKey.current) {
        setValidateStatus('success');
      }
    } catch (e) {
      if (key === validateKey.current) {
        setValidateStatus({
          state: 'error',
          message: e.errors[0].message,
        });
        if (method === 'force') throw e;
      }
    } finally {
      if (key === validateKey.current) {
        if (nextTickToValidate.current === true) {
          nextTickToValidate.current = false;
          setNextTickToValidateValue(true);
        }
      }
    }
  });

  useEffect(() => {
    if (nextTickToValidateValue === true) {
      setNextTickToValidateValue(false);
      validate('change');
    }
  }, [nextTickToValidateValue, validate]);

  const clearValidate = useCallback(() => {
    touchedRef.current = false;
    setValidateStatus('');
  }, [setValidateStatus]);

  useEffect(() => {
    const v = {
      name,
      validate: () => validate('force'),
      setValidateStatus,
      clearValidate,
      cancelValidate,
    };
    register(v);

    return () => unregister(v);
  }, [register, unregister, name, validate, clearValidate, cancelValidate, setValidateStatus]);

  const debouncedValidate = useCallback(() => debounce(() => validate('change'), 200)(), [
    validate,
  ]);

  const isFirstMount = useFirstMountState();
  const lastValueRef = useRef<unknown>();
  useEffect(() => {
    if (!isFirstMount) {
      // the value has changed and not triggered by clear, try to validate
      if (lastValueRef.current !== value && touchedRef.current) {
        lastValueRef.current = value;
        debouncedValidate();
      }
    }
  }, [debouncedValidate, isFirstMount, value]);

  const onChange = useCallback(
    v => {
      setValue(pathes, v);
      touchedRef.current = true;
    },
    [pathes, setValue]
  );

  let ohMyChild: React.ReactElement | null = null;
  if (React.isValidElement(children)) {
    if ('value' in children.props) {
      throw new Error('[ST Form.Item] remove prop `value` form input inside a form item');
    }
    if ('onChange' in children.props) {
      children.props;
    }

    ohMyChild = React.cloneElement(children, { ...children.props, value, onChange });
  } else if (typeof children === 'function') {
    ohMyChild = children({
      value,
      onChange,
      validate,
      validateStatus,
      setValidateStatus,
      clearValidate,
      cancelValidate,
    });
  }

  const asterisk = !!(Array.isArray(rules) ? rules : [rules]).find(r => r.required);

  return (
    <div
      className={clsx('st-form-item', validateStatus.state === 'error' && 'st-form-item--error')}
    >
      <label>
        <span className={clsx('st-label', asterisk && 'st-label-asterisk')}>{label}:</span>
        {ohMyChild}
      </label>
      <FormContent>
        <div>
          {validateStatus.message ? (
            <span className="st-error-message">{validateStatus.message}</span>
          ) : (
            <span className="st-error-message">&nbsp;</span>
          )}
        </div>
      </FormContent>
    </div>
  );
};

export { FormItem, FormContent };
