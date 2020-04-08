import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import Categories from './Categories/Categories';
import Expenses from './Expenses/Expenses';

const { Footer } = Layout;

const UserDashboard = (props) => {
  const { match } = props;

  return (
    <>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              render={() => <Redirect to={`${match.path}/expenses`} />}
            />
            <Route
              exact
              path={`${match.path}/categories`}
              component={Categories}
            />
            <Route exact path={`${match.path}/expenses`} component={Expenses} />
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            Expense Tracker ©2020 Created by Sachin C V
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default UserDashboard;
