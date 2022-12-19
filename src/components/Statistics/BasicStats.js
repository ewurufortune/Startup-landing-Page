import React from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const BasicStats = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={800728} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Ratings" value={93} suffix="/ 100" />
    </Col>
  </Row>
);
export default BasicStats;