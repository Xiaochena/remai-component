import { SearchOutlined } from '@ant-design/icons';
import { useContext, useMemo } from 'react';
import classnames from 'classnames';

import useControllableValue from '../hook/useControllableValue';
import IconFont from '../icon-font';
import ConfigContext from '../utils/config-provider/ConfigContext';
import * as Styled from './style';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface ListSearchProps {
  value?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  classNames?: string;
  onChange?: (e: InputChangeEvent) => void;
  onSearch?: (val: string, e: ButtonMouseEvent) => void;
}

const ListSearch: React.FC<ListSearchProps> = (props) => {
  const { placeholder, value, style, classNames, onChange, onSearch } = props;

  const [inputValue, setInputValue] = useControllableValue({ value });

  const handleOnChange = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleOnSearch = (e: ButtonMouseEvent) => {
    onSearch?.(inputValue || '', e);
  };

  const { prefixCls: globalPrefixCls } = useContext(ConfigContext);

  const prefixCls = `${globalPrefixCls}-list-search`;

  const clearIconFontCls = useMemo(
    () =>
      classnames(
        { [`${prefixCls}-clear`]: !!inputValue?.length },
        { [`${prefixCls}-hidden`]: !inputValue?.length },
      ),
    [inputValue?.length, prefixCls],
  );

  return (
    <Styled.Wrap style={style} prefixCls={prefixCls} className={classNames}>
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-input-wrap`}>
          <input
            value={inputValue}
            type="text"
            className={`${prefixCls}-input`}
            placeholder={placeholder}
            onChange={handleOnChange}
          />
          <span className={clearIconFontCls}>
            <IconFont type="iconduibiyichu" className={`${prefixCls}-clear-icon`} />
          </span>
        </div>
        <button className={`${prefixCls}-search-btn`} onClick={handleOnSearch}>
          <SearchOutlined />
        </button>
      </div>
    </Styled.Wrap>
  );
};

export default ListSearch;
