import React, { FC, useState } from 'react';
import { ListSearch } from '@remai/design';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleOnChange = (event: InputChangeEvent) => {
    console.log('Change:', event.target.value);
    setValue(event.target.value);
  };

  const onSearch = (value: string, event: ButtonMouseEvent) => {
    console.log('value:', value);
    console.log('event:', event);
  };

  return (
    <ListSearch value={value} onChange={handleOnChange} placeholder="请输入" onSearch={onSearch} />
  );
};

export default Demo;
