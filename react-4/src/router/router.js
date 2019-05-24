import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Layout from './Layout';
/* Containers */
import App from '../containers/App/App';
import DetailsPage from '../containers/DetailsPage/DetailsPage';

const MyRouter = () => (
  <React.Fragment>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/details" component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </React.Fragment>
);

export default withRouter(connect()(MyRouter));
