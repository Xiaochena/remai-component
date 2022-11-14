import classnames from 'classnames';
import { Popover } from 'antd';
import { hook } from '@remai/design';

import styles from './styles.less';

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

const { useControlValue } = hook;

function TagCascade<T extends string | number>(props: TagCascadeProps<T>) {
  const { options = [], className, style, onChange } = props;

  const [value, setValue] = useControlValue<T>();

  const changeValue = (value: T, item: OptionType<T>) => {
    setValue(value);
    onChange?.(value, item);
  };

  const showLi = (item: OptionType<T>, isChild?: boolean) => {
    const liClass = classnames(styles.tag, {
      [styles.tagActive]: value === item.value && !isChild,
      [styles.tagChildActive]: value === item.value && isChild,
    });

    return (
      <li className={liClass} key={item.value} onClick={() => changeValue(item.value, item)}>
        {item.label}
      </li>
    );
  };

  return (
    <div className={classnames(styles.tagCascade, className)} style={style}>
      {options.map((item) => {
        if (item.children) {
          return (
            <Popover
              open
              overlayClassName={styles.tagCascadePopover}
              key={item.value}
              content={
                <ul className={styles.tagCascade}>
                  {item.children.map((child) => showLi(child, true))}
                </ul>
              }
            >
              {showLi(item)}
            </Popover>
          );
        }

        return showLi(item);
      })}
    </div>
  );
}

export default TagCascade;
