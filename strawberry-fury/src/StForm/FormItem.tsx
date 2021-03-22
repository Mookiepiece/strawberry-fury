import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncValidator from 'async-validator';
import { RuleItem } from 'async-validator';
import { FormContext } from './FormContext';
import { useEventCallback } from '🦄/_utils/useEventCallback';

export function getProp(obj: Record<string, unknown>, pathes: string[]): unknown {
  return pathes.reduce((tempObj, k) => {
    if (k in tempObj) {
      return tempObj[k] as Record<string, unknown>;
    } else {
      throw new Error(`[ST form] cannot get value by ${pathes} on object ${obj}`);
    }
  }, obj);
}

export type FormItemProps = {
  rules?: RuleItem | RuleItem[];
  label: string;
  name: string;
};

const FormItem: React.FC<FormItemProps> = ({ rules: _rules = [], label, name, children }) => {
  const { value: formValue, setValue, register, unregister } = useContext(FormContext);

  const pathes = useMemo(() => {
    return name.replace(/\[(\w+)\]/g, '.$1').split('.');
  }, [name]);

  const value = getProp(formValue, pathes);

  const onChange = useCallback(v => setValue(pathes, v), [pathes, setValue]);

  const rules = useRef<RuleItem[]>([]);
  useEffect(() => {
    rules.current = Array.isArray(_rules) ? _rules : [_rules];
  }, [_rules]);

  const [validateResult, setValidateResult] = useState({
    state: '',
    message: '',
  });

  const _validate = useCallback(async () => {
    const validator = new AsyncValidator({ [name]: rules.current });
    try {
      await validator.validate({ [name]: value }, { firstFields: true });
      setValidateResult({
        state: 'success',
        message: '',
      });
    } catch (e) {
      setValidateResult({
        state: 'error',
        message: e.errors[0].message,
      });
      throw e;
    }
  }, [name, rules, value]);
  const validate = useEventCallback(_validate);

  const clearValidate = useCallback(() => {
    setValidateResult({
      state: '',
      message: '',
    });
  }, []);

  useEffect(() => {
    const v = { name, validate, clearValidate };
    register(v);

    return () => unregister(v);
  }, [register, unregister, name, clearValidate, validate]);

  let ohMyChild: React.ReactElement | null = null;
  if (React.isValidElement(children)) {
    ohMyChild = React.cloneElement(children, { ...children.props, value, onChange });
  }

  return (
    <div>
      <p>{label}:</p>
      {ohMyChild}
      <p>Error Message:{validateResult.message}</p>
    </div>
  );
};

export default FormItem;
