import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';
import { useEventCallback } from '🦄/_utils/useEventCallback';
import { FormContext, FormItemsRegisterProps } from './FormContext';
import FormItem, { FormItemProps } from './FormItem';

export function setProp<T extends Record<string, unknown>>(
  obj: T,
  pathes: string[],
  value: unknown
): T {
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

export type FormInstance = {
  validate: () => Promise<void>;
  reset: () => void;
  clearValidate: () => void;
};

type FormProps<T extends Record<string, unknown>> = {
  value: T;
  action: (value: T) => void;
  children?: React.ReactNode;
  onChange: Dispatch<SetStateAction<T>>;
};

const FormI = <T extends Record<string, unknown>>(props: FormProps<T>, ref: React.Ref<unknown>) => {
  const { value, children } = props;

  const action = useEventCallback(props.action);
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

  const validate = useCallback(async () => {
    await Promise.all(items.current.map(item => item.validate()));
  }, []);

  const clearValidate = useCallback(async () => {
    items.current.forEach(item => item.clearValidate());
  }, []);

  const submit = useEventCallback(() => {
    validate()
      .then(() => {
        action(value);
      })
      .catch(() => {});
  });

  const reset = useEventCallback(async () => {
    items.current.forEach(item => item.clearValidate());
    onChange(initialValue.current);
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
    () => ({
      validate,
      clearValidate,
      reset,
    }),
    [clearValidate, reset, validate]
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
FormI.displayName = 'Form';

const Form: (<T extends Record<string, unknown>>(
  props: FormProps<T> & React.RefAttributes<unknown>
) => React.ReactElement) & {
  Item: React.FC<FormItemProps>;
} = Object.assign(React.forwardRef(FormI), {
  Item: FormItem,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export default Form;
