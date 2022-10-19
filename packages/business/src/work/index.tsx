import type { FC } from 'react';
import { Row, Col, Button } from 'antd';
import classnames from 'classnames';

import { IconFont, ListSearch } from '@remai/design';
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
      <Row>
        <Col span={16}>
          <ListSearch classNames={styles.search} placeholder="请输入作品关键字" />
        </Col>
        <Col span={8}>
          <Button type="link" className={styles.screen}>
            展开筛选条件
            <IconFont type="iconcaidanzhankaishouqi" />
          </Button>
        </Col>
      </Row>
      <div>Work</div>
    </ListLayout>
  );
};

export default WorkList;
