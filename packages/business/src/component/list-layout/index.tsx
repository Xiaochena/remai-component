import type { HTMLAttributes } from 'react';
import styles from './styles.less';

interface ListLayoutProps extends HTMLAttributes<HTMLDivElement> {
  headerImg?: string;
  children?: React.ReactNode;
}

const ListLayout: React.FC<ListLayoutProps> = (props) => {
  const { children, headerImg, ...divProps } = props;

  return (
    <div className={styles.listLayout} {...divProps}>
      {headerImg && (
        <div className={styles.headerWrap}>
          <img src={headerImg} className={styles.headerImg} />
        </div>
      )}
      <div className={styles.listBox}>{children}</div>
    </div>
  );
};

export default ListLayout;
