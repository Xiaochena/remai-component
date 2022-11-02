import { renderHook, act } from '@testing-library/react-hooks';
import { useRef } from 'react';
import useUpdate from '..';

describe('useUpdate', () => {
  it('should update', () => {
    const { result } = renderHook(() => {
      const count = useRef(0);
      const update = useUpdate();
      const onChange = () => {
        count.current += 1;
        update();
      };
      return { count: count.current, onChange };
    });

    expect(result.current.count).toEqual(0);
    act(result.current.onChange);
    expect(result.current.count).toEqual(1);
  });
});
