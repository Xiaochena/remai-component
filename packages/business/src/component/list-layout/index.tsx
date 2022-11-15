import type { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Spin } from 'antd';
import styles from './styles.less';

interface ListLayoutProps extends HTMLAttributes<HTMLDivElement> {
  headerImg?: string;
  children?: React.ReactNode;
  loading?: boolean;
}

const ListLayout: React.FC<ListLayoutProps> = (props) => {
  const { children, headerImg, className, loading, ...divProps } = props;

  return (
    <div className={classnames(styles.listLayout, className)} {...divProps}>
      {headerImg && (
        <div className={styles.headerWrap}>
          <img src={headerImg} className={styles.headerImg} />
        </div>
      )}
      <div className={styles.listBox}>
        {children}
        <div className={classnames(styles.spinBox, { [styles.rHidden]: !loading })}>
          <Spin />
        </div>
      </div>
    </div>
  );
};

export default ListLayout;
