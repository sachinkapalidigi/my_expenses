import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainNavbar from './components/MainNavbar/MainNavbar';
import LandingPage from './pages/Landing/Landing';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import { setTokenOnMount } from './redux/Auth/auth.actions';
import UserDashboard from './pages/User/UserDashboard';

const App = (props) => {
  useEffect(() => {
    const { setTokenOnMount: STOM } = props;
    STOM();
  });
  const { token } = props;
  return (
    <Layout>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/login"
          render={() => (token ? <Redirect to="/dashboard" /> : <LoginPage />)}
        />
        <Route
          exact
          path="/register"
          render={() =>
            token ? <Redirect to="/dashboard" /> : <RegisterPage />
          }
        />
        <Route
          path="/dashboard"
          render={(routeProps) =>
            token ? (
              <UserDashboard match={routeProps.match} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Layout>
  );
};

const mapStateToProps = ({ auth: { token } }) => ({
  token,
});
const mapDispatchToProps = (dispatch) => ({
  setTokenOnMount: () => dispatch(setTokenOnMount()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
