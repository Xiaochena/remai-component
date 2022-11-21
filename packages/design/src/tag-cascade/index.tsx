import { useContext } from 'react';
import classnames from 'classnames';
import { Popover } from 'antd';
import { useControlValue } from '../hook';

import * as Styled from './styles';
import ConfigContext from '../utils/config-provider/ConfigContext';

type BaseOption<T> = { label: string; value: T };

interface Option<T> extends BaseOption<T> {
  children?: BaseOption<T>[];
  [x: string]: string | T | Omit<Option<T>, 'children'>[] | undefined;
}

interface TagCascadeProps<T> {
  value?: T[];
  options?: Option<T>[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (val: T[]) => {};
}

function TagCascade<T extends string | number>(props: TagCascadeProps<T>) {
  const { options = [], className, style, onChange } = props;

  const [value, setValue] = useControlValue<T[]>();

  const { prefixCls: globalPrefixCls } = useContext(ConfigContext);
  const prefixCls = `${globalPrefixCls}-tag-cascade`;

  const changeValue = (item: Option<T>, parent?: Option<T>) => {
    const value = [item.value];
    if (parent) {
      value.unshift(parent?.value);
    }
    setValue(value);
    onChange?.(value);
  };

  const showLi = (item: BaseOption<T>, parent?: Option<T>) => {
    const liClass = classnames(`${prefixCls}-tag`, {
      [`${prefixCls}-active`]: value?.[0] === item.value && !parent,
      [`${prefixCls}-child-active`]: value?.[1] === item.value && parent,
    });

    return (
      <li className={liClass} key={item.value} onClick={() => changeValue(item, parent)}>
        {item.label}
      </li>
    );
  };

  return (
    <Styled.Wrap className={className} style={style} prefixCls={prefixCls}>
      <div className={prefixCls}>
        {options.map((parent) => {
          if (parent.children) {
            return (
              <Popover
                getPopupContainer={(triggerNode) => triggerNode}
                overlayClassName={`${prefixCls}-cascade-popover`}
                key={parent.value}
                content={
                  <Styled.Wrap prefixCls={prefixCls}>
                    <div className={prefixCls}>
                      {parent.children.map((child) => showLi(child, parent))}
                    </div>
                  </Styled.Wrap>
                }
              >
                {showLi(parent)}
              </Popover>
            );
          }

          return showLi(parent);
        })}
      </div>
    </Styled.Wrap>
  );
}

export default TagCascade;
