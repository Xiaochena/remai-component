import { SearchOutlined } from '@ant-design/icons';

import useControllableValue from '../hook/useControllableValue';
import IconFont from '../icon-font';

import * as Styled from './style';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface ListSearchProps {
  value?: string;
  placeholder?: string;
  addonBefore?: React.ReactNode;
  onChange?: (e: InputChangeEvent) => void;
  onSearch?: (val: string, e: ButtonMouseEvent) => void;
  style?: React.CSSProperties;
}

const ListSearch: React.FC<ListSearchProps> = (props) => {
  const { placeholder, value, style, onChange, onSearch } = props;

  const [inputValue, setInputValue] = useControllableValue({ value });

  const handleOnChange = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleOnSearch = (e: ButtonMouseEvent) => {
    onSearch?.(inputValue || '', e);
  };

  return (
    <Styled.Wrap style={style}>
      <div className="listSearch">
        <div className="inputWrap">
          <input
            value={inputValue}
            type="text"
            className="input"
            placeholder={placeholder}
            onChange={handleOnChange}
          />
          <span className="clear">
            <IconFont type="iconduibiyichu" className="clearIcon" />
          </span>
        </div>
        <button className="searchBtn" onClick={handleOnSearch}>
          <SearchOutlined />
        </button>
      </div>
    </Styled.Wrap>
  );
};

export default ListSearch;
