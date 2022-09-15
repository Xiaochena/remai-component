import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './styles.less';

export type ListLayoutProps = FC<
  PropsWithChildren<{
    header?: ReactNode;
  }>
>;

const ListLayout: ListLayoutProps = (props) => {
  const { children, header } = props;

  return (
    <div className={styles.listLayout}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.listBox}>{children}</div>
    </div>
  );
};

export default ListLayout;
