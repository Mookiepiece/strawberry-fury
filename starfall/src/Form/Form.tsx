import { ErrorList, ValidateError } from 'async-validator';
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';
import { useEventCallback } from 'starfall/_utils/useEventCallback';
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

type FormInstance = {
  validate: (names?: string[]) => Promise<void>;
  reset: (names?: string[]) => void;
  clearValidate: (names?: string[]) => void;
  setValidateStatus: (name: string, validateStatus: ValidateStatusParam) => void;
};

type FormProps<T extends Record<string, unknown>> = {
  value: T;
  onChange: (value: T) => void;
  onSubmit: (value: T) => void;
  onSubmitValidateFailed?: (err: ValidateError) => void;
  children?: React.ReactNode;
  onValidateStatusChange?: (isValidating: boolean) => void;
};

const _Form = <T extends Record<string, unknown>>(props: FormProps<T>, ref: React.Ref<unknown>) => {
  const { value, children } = props;

  const onSubmit = useEventCallback(props.onSubmit);
  const onChange = useEventCallback(props.onChange);
  const onValidateStatusChange = useEventCallback(props.onValidateStatusChange || (() => {}));

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

  const validate = useCallback(
    async (names: string[] = []) => {
      const i = names.length
        ? items.current.filter(({ name }) => names.includes(name))
        : items.current;
      onValidateStatusChange(true);
      try {
        await Promise.all(i.map(item => item.validate()));
      } finally {
        onValidateStatusChange(false);
      }
    },
    [onValidateStatusChange]
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

  const submit = useEventCallback(() => {
    validate()
      .then(() => {
        onSubmit(value);
      })
      .catch((e: { errors: ErrorList }) => {
        props.onSubmitValidateFailed?.(e.errors[0]);
      });
  });

  const setValue = useEventCallback((pathes: string[], propValue: unknown) => {
    onChange(setProp<T>(value, pathes, propValue));
  });

  const formContextValue = useMemo(
    () => ({
      value,
      setValue,
      register,
      unregister,
      submit,
      clearValidate,
      reset,
    }),
    [value, setValue, register, unregister, clearValidate, reset, submit]
  );

  useImperativeHandle(
    ref,
    (): FormInstance => ({
      validate,
      setValidateStatus,
      clearValidate,
      reset,
    }),
    [validate, setValidateStatus, clearValidate, reset]
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      submit();
    },
    [submit]
  );

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

const Form: (<T extends Record<string, unknown>>(
  props: FormProps<T> & React.RefAttributes<unknown>
) => React.ReactElement) & {
  Item: React.FC<FormItemProps>;
  Content: React.FC;
  useRef: () => React.RefObject<FormInstance>;
} = Object.assign(React.forwardRef(_Form), {
  Item: FormItem,
  Content: FormContent,
  useRef: () => React.useRef<FormInstance>(null),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export default Form;
