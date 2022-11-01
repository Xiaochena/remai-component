import { useRef } from 'react';
import useUpdate from '../useUpdate';

interface useControlValueProps<T> {
  value?: T;
  onChange?: (val: T) => void;
}

/** @类型重载 传入value */
function useControlValue<T>(props: {
  value: T;
  onChange?: (val: T) => void;
}): [T, (nextValue: T) => void];

/** @类型重载 不传入value */
function useControlValue<T = undefined>(props: {
  value?: T;
  onChange?: (val: T) => void;
}): [T | undefined, (nextValue: T) => void];

/** @类型重载 啥都不传入 */
function useControlValue<T = undefined>(): [T | undefined, (nextValue: T) => void];

function useControlValue<T>(props?: useControlValueProps<T>) {
  const { value, onChange } = props || {};

  const isControlled = value !== undefined;
  const stateRef = useRef(value);

  if (isControlled) {
    stateRef.current = value;
  }

  const update = useUpdate();

  const setState = (nextValue: T) => {
    /** 如果setState的值没有发生变化 */
    if (nextValue === stateRef.current) {
      return;
    }
    stateRef.current = nextValue;
    update();
    onChange?.(nextValue);
  };

  return [stateRef.current, setState];
}

export default useControlValue;
