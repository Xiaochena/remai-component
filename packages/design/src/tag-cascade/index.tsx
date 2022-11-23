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
  onChange?: (val: T[] | T[][]) => void;
  multiple?: boolean;
}

function TagCascade<T extends string | number>(props: TagCascadeProps<T>) {
  const { options = [], className, style, onChange, multiple } = props;

  const [value, setValue] = useControlValue<T[] | T[][]>();

  const { prefixCls: globalPrefixCls } = useContext(ConfigContext);
  const prefixCls = `${globalPrefixCls}-tag-cascade`;

  const changeValue = (item: Option<T>, parent?: Option<T>) => {
    let selectVal: T[] | T[][] = [item.value];
    if (parent) {
      selectVal.unshift(parent.value);
    }

    if (multiple) {
      let val = (value as T[][]) || [];

      if (!parent) {
        // 点击了一级标签、则清空value中关于该一级标签的所有子级别标签、只保留一级标签
        val = val.filter((v) => !(v.length > 1 && v[0] === item.value));
      }
      if (parent) {
        // 点击了二级标签、则若value中有关于该二级标签的父标签、则删除一级标签只保留二级标签
        val = val.filter((v) => v[0] !== parent.value || v.length > 1);
      }
      const itemIsInVal = val.findIndex((v) => v[v.length - 1] === item.value);
      if (itemIsInVal !== -1) {
        val.splice(itemIsInVal, 1);
        selectVal = [...val];
      } else {
        selectVal = [...val, selectVal];
      }
    }

    setValue(selectVal);
    onChange?.(selectVal);
  };

  const showLi = (item: BaseOption<T>, parent?: Option<T>) => {
    let active = value?.[0] === item.value && !parent;
    let childActive = !!(value?.[1] === item.value && parent);

    if (multiple) {
      const val = (value as T[][]) || [];
      active = !!val.find((v) => v[0] === item.value);
      childActive = !!val.find((v) => v[1] === item.value);
    }

    let liClass = classnames(`${prefixCls}-tag`, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-child-active`]: childActive,
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
                open
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
