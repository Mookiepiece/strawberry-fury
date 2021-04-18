import { ErrorList, ValidateError } from 'async-validator';
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  FormEvent,
  useState,
  useContext,
} from 'react';
import Button from '../Button';
import { useEventCallback } from '../_utils/useEventCallback';
import { FormContext, FormItemsRegisterProps } from './FormContext';
import { FormItem, FormContent, FormItemProps, ValidateStatusParam } from './FormItem';

function setProp<T extends Record<string, unknown>>(obj: T, pathes: string[], value: unknown): T {
  const ans = { ...obj }; // answer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let curr: any = ans; // an cursor to walk deep into the obj

  let i = 0;
  for (; i < pathes.length - 1; i++) {
    const path = pathes[i];
    const next = curr[path];
    if (Array.isArray(next)) {
      curr = curr[path] = [...next];
    } else if (typeof next === 'object') {
      curr = curr[path] = { ...next };
    } else {
      throw new Error(`[ST form] cannot get prop on ${obj} by [${pathes.join(' ')}]`);
    }
  }

  if (value === undefined) {
    delete curr[pathes[i]];
  } else {
    curr[pathes[i]] = value;
  }

  return ans;
}

type FormInstance<T extends Record<string, unknown>> = {
  validate: (names?: string[]) => Promise<T>;
  reset: (names?: string[]) => void;
  clearValidate: (names?: string[]) => void;
  setValidateStatus: (name: string, validateStatus: ValidateStatusParam) => void;
};

type FormProps<T extends Record<string, unknown>> = {
  value: T;
  onChange: (value: T) => void;
  children?: React.ReactNode;
  /** provide api and indicates the Form do internal submit, pick one from `action` and `onSubmit` */
  action?:
    | ((value: T) => Promise<void> | void)
    | [(value: T) => Promise<void> | void, (errors: ErrorList) => Promise<void> | void];
  /** should validate manually if using form in this way, pick one from `action` and `onSubmit` */
  onSubmit?: () => void;
};

const _Form = <T extends Record<string, unknown>>(props: FormProps<T>, ref: React.Ref<unknown>) => {
  const { value, children } = props;

  const [submitting, setSubmitting] = useState(false);

  if ((props.action && props.onSubmit) || (!props.action && !props.onSubmit)) {
    throw new Error('[ST form] prop `action` and `onSubmit` conflicts or not be provided');
  }

  const onChange = useEventCallback(props.onChange);

  const initialValue = useRef(value);

  const items = useRef<FormItemsRegisterProps[]>([]);

  const register = useCallback(i => {
    items.current = [...items.current, i];
  }, []);
  const unregister = useCallback(i => {
    const index = items.current.findIndex(k => k === i);
    if (index !== -1) {
      items.current = [...items.current.slice(0, index), ...items.current.slice(index + 1)];
    }
  }, []);

  const validate = useEventCallback(
    async (names: string[] = []): Promise<T> => {
      const i = names.length
        ? items.current.filter(({ name }) => names.includes(name))
        : items.current;

      let t = 0;
      const errors: ErrorList = [];
      return new Promise((resolve, reject) => {
        const callback = (e?: { errors: ErrorList }) => {
          if (e) {
            errors.push(...e.errors);
          }
          if (++t === i.length) {
            if (errors.length) {
              reject(errors);
            }
            resolve(value);
          }
          return;
        };
        i.map(item => item.validate().then(() => callback(), callback));
      });
    }
  );

  const clearValidate = useCallback((names: string[] = []) => {
    const i = names.length
      ? items.current.filter(({ name }) => names.includes(name))
      : items.current;
    i.forEach(item => item.clearValidate());
  }, []);

  const reset = useEventCallback(async (names: string[] = []) => {
    const i = names.length
      ? items.current.filter(({ name }) => names.includes(name))
      : items.current;
    i.forEach(item => (item.cancelValidate(), item.clearValidate()));
    onChange(initialValue.current);
  });

  const setValidateStatus = useCallback((name: string, validateStatus: ValidateStatusParam) => {
    const i = items.current.filter(({ name: _ }) => _ === name);
    i.forEach(item => {
      item.setValidateStatus(validateStatus);
    });
  }, []);

  const setValue = useEventCallback((pathes: string[], propValue: unknown) => {
    onChange(setProp<T>(value, pathes, propValue));
  });

  const formContextValue = useMemo(
    () => ({
      value,
      setValue,
      register,
      unregister,
      submitting,
    }),
    [value, setValue, register, unregister, submitting]
  );

  useImperativeHandle(
    ref,
    (): FormInstance<T> => ({
      validate,
      setValidateStatus,
      clearValidate,
      reset,
    }),
    [validate, setValidateStatus, clearValidate, reset]
  );

  const handleSubmit = useEventCallback(async (e: FormEvent) => {
    e.preventDefault();

    if (props.action) {
      const [successAction, failedAction] = Array.isArray(props.action)
        ? props.action
        : [props.action, () => {}];

      // internal submit
      setSubmitting(() => true);

      try {
        await validate();

        try {
          await successAction(value);
        } catch (_) {
          void 0;
        }
      } catch (e) {
        failedAction(e);
      } finally {
        setSubmitting(() => false);
      }
    } else {
      // external submit
      props.onSubmit?.();
    }
  });

  const handleReset = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      reset();
    },
    [reset]
  );

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>
    </form>
  );
};
_Form.displayName = 'Form';

const FormSubmitButton: typeof Button = props => {
  const { submitting } = useContext(FormContext);

  return <Button {...props} type="submit" loading={props.loading || submitting} />;
};

const Form: (<T extends Record<string, unknown>>(
  props: FormProps<T> & React.RefAttributes<unknown>
) => React.ReactElement) & {
  Item: React.FC<FormItemProps>;
  Content: React.FC;
  SubmitButton: typeof Button;
  useRef: <T extends Record<string, unknown>>() => React.RefObject<FormInstance<T>>;
} = Object.assign(React.forwardRef(_Form), {
  Item: FormItem,
  Content: FormContent,
  SubmitButton: FormSubmitButton,
  useRef: <T extends Record<string, unknown>>() => React.useRef<FormInstance<T>>(null),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export default Form;
