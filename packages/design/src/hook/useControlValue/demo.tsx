import React, { useState } from 'react';
import useControlValue from '.';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface DemoProps {
  value?: string;
  // onChange?: (e: InputChangeEvent) => void;
}

const Demo = (props: DemoProps) => {
  const { value } = props;
  const [inputValue, setInputValue] = useControlValue(props);
  const [state, setState] = useState();
  return <input />;
};
