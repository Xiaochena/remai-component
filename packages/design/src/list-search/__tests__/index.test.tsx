import { useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ListSearch, { ListSearchProps } from '../';

describe('<ListSearch />', () => {
  it('placeholder', () => {
    const placeholder = '请输入';
    render(<ListSearch placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('onSearch', async () => {
    let value;
    const enterKey = '111';
    const onSearch: ListSearchProps['onSearch'] = (val) => {
      value = val;
    };
    render(<ListSearch onSearch={onSearch} />);
    const input = screen.getByRole('textbox');
    // 注焦、输入
    input.focus();
    await userEvent.keyboard(enterKey);
    // 校验value是否发生改变
    expect(screen.getByDisplayValue(enterKey)).toBeEmptyDOMElement();
    // 点击 查询
    const btn = screen.getByRole('button', { name: /search/i });
    await userEvent.click(btn);

    expect(value).toEqual(enterKey);
  });

  it('value is not controlled', async () => {
    const enterKey = '111';
    render(<ListSearch />);
    const input = screen.getByRole('textbox');
    // 注焦、输入
    input.focus();
    await userEvent.keyboard(enterKey);
    // 校验value是否发生改变
    expect(screen.getByDisplayValue(enterKey)).toBeEmptyDOMElement();
  });

  it('value is controlled', async () => {
    const defaultValue = 'defaultValue';
    const changeValue = 'changeValue';
    const btnLabel = '改变';
    const enterKey = '111';

    const Dom = () => {
      const [value, setValue] = useState(defaultValue);
      return (
        <>
          <button onClick={() => setValue(changeValue)}>{btnLabel}</button>
          <ListSearch value={value} />
        </>
      );
    };
    render(<Dom />);

    // 校验开始、为默认值
    expect(screen.getByDisplayValue(defaultValue)).toBeEmptyDOMElement();
    // 获取btn 、触发click、改变value
    const changeBtn = screen.getByRole('button', { name: btnLabel });
    await userEvent.click(changeBtn);
    // 校验value是否发生改变
    expect(screen.getByDisplayValue(changeValue)).toBeEmptyDOMElement();

    // 获取input
    const input = screen.getByRole('textbox');
    // 注焦、输入
    input.focus();
    await userEvent.keyboard(enterKey);
    // 校验value 是否没有发生改变
    expect(screen.getByDisplayValue(changeValue)).toBeEmptyDOMElement();
  });
});
