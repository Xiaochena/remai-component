import { Row, Col, Button } from 'antd';
import { ListSearch, IconFont } from '@remai/design';

import styles from './styles.less';

const Filter = () => {
  return (
    <Row className={styles.filter}>
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
  );
};

export default Filter;
