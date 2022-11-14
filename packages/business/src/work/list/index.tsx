import type { FC } from 'react';
import { Row, Col, Button, Form } from 'antd';
import classnames from 'classnames';
import { changeAntdConfig } from '@remai/config';
import { IconFont, ListSearch, TagCascade } from '@remai/design';

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
      <Row className={styles.searchBox}>
        <Col span={16}>
          <ListSearch classNames={styles.search} placeholder="请输入作品关键字" />
        </Col>
        <Col span={8}>
          <Button type="link" className={styles.screen}>
            <span>展开筛选条件</span>
            <IconFont type="iconcaidanzhankaishouqi" />
          </Button>
        </Col>
      </Row>
      <Form className={styles.form}>
        <Form.Item name="mediaCategoryId" label="作品类别" className={styles.formItem}>
          <TagCascade
            className={styles.tagContent}
            options={[
              {
                label: '测试1',
                value: 'cs1',
                children: [
                  { label: '测试1-1', value: 'cs1-1' },
                  { label: '测试1-2', value: 'cs1-2' },
                ],
              },
              { label: '测试2', value: 'cs2' },
              { label: '测试3', value: 'cs3' },
              { label: '测试4', value: 'cs4' },
              { label: '测试5', value: 'cs5' },
              { label: '测试6', value: 'cs6' },
              { label: '测试7', value: 'cs7' },
              { label: '测试8', value: 'cs8' },
              { label: '测试9', value: 'cs9' },
              { label: '测试10', value: 'cs10' },
              { label: '测试11', value: 'cs11' },
              { label: '测试12', value: 'cs12' },
              { label: '测试13', value: 'cs13' },
              { label: '测试14', value: 'cs14' },
              { label: '测试15', value: 'cs15' },
              { label: '测试16', value: 'cs16' },
              { label: '测试17', value: 'cs17' },
              { label: '测试18', value: 'cs18' },
              { label: '测试19', value: 'cs19' },
            ]}
          />
        </Form.Item>
        <Form.Item name="type" label="作品属性" className={styles.formItem}>
          <TagCascade className={styles.tagContent} options={[{ label: '测试', value: 'cs1' }]} />
        </Form.Item>
      </Form>
    </ListLayout>
  );
};

export default changeAntdConfig(WorkList);
