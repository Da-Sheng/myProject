import { useState, useCallback } from 'react';
import { freeze, Draft, produce } from 'immer';

export type DraftFunc<T> = (draft: Draft<T>) => void;
export type UpdateFunc<T> = (arg: T | DraftFunc<T>) => T;
export function useImmer<T>(initialValue: T | (() => T)): [T, UpdateFunc<T>];

export function useImmer<T>(initialValue: T) {
  const [value, setValue] = useState(
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue)
  );

  const updateValue = useCallback((arg: T | DraftFunc<T>) => {
    // 类型守卫函数
    const isDraftFunc = (fn: unknown): fn is DraftFunc<T> =>
      typeof fn === 'function';

    if (isDraftFunc(arg)) {
      setValue(produce(arg));
    } else {
      setValue(freeze(arg));
    }
  }, []);

  return [value, updateValue];
}
