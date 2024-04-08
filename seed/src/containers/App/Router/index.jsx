import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import Landing from '../../Landing/index';
import NotFound404 from '../../DefaultPage/404/index';
import LogIn from '../../Account/LogIn/index';
import ResetPassword from '../../Account/ResetPassword/index';
import WrappedRoutes from './WrappedRoutes';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/404" component={NotFound404} />
        <Route path="/log_in" component={LogIn} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path="/" component={WrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
