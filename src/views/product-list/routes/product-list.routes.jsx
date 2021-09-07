// vendors
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
// constants
import { PRODUCT_LIST } from '../../../constants/routes.constants';
// components
import Header from '../../../components/header/header.component';

const ProductList = lazy(() => import('../product-list.component'));

export default () => [
  <Route
    exact
    key={PRODUCT_LIST}
    path={PRODUCT_LIST}
    render={(props) => (
      <>
        <Header />
        <ProductList {...props} />
      </>
    )}
  />,
];
