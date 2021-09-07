// vendors
import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import PropTypes from 'prop-types';
// routes
import ProductListRoute from '../../views/product-list/routes/product-list.routes';
import ProductDetailRoute from '../../views/product-detail/routes/product-detail.routes';

const App = ({
  store,
}) => (
  <StoreProvider store={store}>
    <Router>
      <Suspense fallback={<div />}>
        <Switch>{[...ProductListRoute(), ...ProductDetailRoute()]}</Switch>
      </Suspense>
    </Router>
  </StoreProvider>
);

App.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
