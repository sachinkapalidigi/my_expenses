import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './ContentWrapper.module.css';

const { Content } = Layout;
const { Title } = Typography;

const ContentWrapper = (props) => {
  const { title, children } = props;
  return (
    <>
      <Title level={3} style={{ margin: '16px 0' }}>
        {title}
      </Title>
      <Content className={styles.siteLayoutBackground}>{children}</Content>
    </>
  );
};

export default ContentWrapper;
