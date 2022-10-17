import { useRef } from 'react';
import useUpdate from './useUpdate';

function useControllableValue<T>(props?: { value: T; onChange?: (val: T) => void }) {
  const { value, onChange } = props || {};

  const isControlled = props?.hasOwnProperty('value');
  const stateRef = useRef(value);

  if (isControlled) {
    stateRef.current = value;
  }

  const update = useUpdate();

  const setState = (nextValue: T) => {
    if (nextValue === stateRef.current) {
      return;
    }
    if (!isControlled) {
      stateRef.current = nextValue;
    }
    update();
    onChange?.(nextValue);
  };

  return [stateRef.current, setState] as const;
}

export default useControllableValue;
