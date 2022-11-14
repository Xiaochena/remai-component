import { useContext } from 'react';
import classnames from 'classnames';
import { Popover } from 'antd';
import { useControlValue } from '../hook';

import * as Styled from './styles';
import ConfigContext from '../utils/config-provider/ConfigContext';

type OptionType<T> = {
  label: string;
  value: T;
  children?: OptionType<T>[];
  [x: string]: string | T | OptionType<T>[] | undefined;
};

interface TagCascadeProps<T> {
  value?: T;
  options?: OptionType<T>[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (val: T, item: OptionType<T>) => {};
}

function TagCascade<T extends string | number>(props: TagCascadeProps<T>) {
  const { options = [], className, style, onChange } = props;

  const [value, setValue] = useControlValue<T>();

  const { prefixCls: globalPrefixCls } = useContext(ConfigContext);
  const prefixCls = `${globalPrefixCls}-tag-cascade`;

  const changeValue = (value: T, item: OptionType<T>) => {
    setValue(value);
    onChange?.(value, item);
  };

  const showLi = (item: OptionType<T>, isChild?: boolean) => {
    const liClass = classnames(`${prefixCls}-tag`, {
      [`${prefixCls}-active`]: value === item.value && !isChild,
      [`${prefixCls}-child-active`]: value === item.value && isChild,
    });

    return (
      <li className={liClass} key={item.value} onClick={() => changeValue(item.value, item)}>
        {item.label}
      </li>
    );
  };

  return (
    <Styled.Wrap className={className} style={style} prefixCls={prefixCls}>
      <div className={prefixCls}>
        {options.map((item) => {
          if (item.children) {
            return (
              <Popover
                getPopupContainer={(triggerNode) => triggerNode}
                overlayClassName={`${prefixCls}-cascade-popover`}
                key={item.value}
                content={
                  <Styled.Wrap prefixCls={prefixCls}>
                    <div className={prefixCls}>
                      {item.children.map((child) => showLi(child, true))}
                    </div>
                  </Styled.Wrap>
                }
              >
                {showLi(item)}
              </Popover>
            );
          }

          return showLi(item);
        })}
      </div>
    </Styled.Wrap>
  );
}

export default TagCascade;
