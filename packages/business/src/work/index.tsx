import type { FC } from 'react';
import classnames from 'classnames';
import { ListSearch } from '@remai/design';
import ListLayout from '@business/component/list-layout';

import xhsWorkHeader from '@business/image/work/xhs-work-header.png';
import styles from './styles.less';

interface WorkListProps {
  className?: string;
}

const WorkList: FC<WorkListProps> = (props) => {
  const { className } = props;
  return (
    <ListLayout headerImg={xhsWorkHeader} className={classnames(styles.workList, className)}>
      <ListSearch style={{ width: 800 }} placeholder="请输入作品关键字" />
      <div>Work</div>
    </ListLayout>
  );
};

export default WorkList;
