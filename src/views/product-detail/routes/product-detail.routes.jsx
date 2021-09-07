// vendors
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
// constants
import { PRODUCT_DETAIL } from '../../../constants/routes.constants';
// components
import Header from '../../../components/header/header.component';

const ProductDetail = lazy(() => import('../product-detail.component'));

export default () => [
  <Route
    exact
    key={PRODUCT_DETAIL}
    path={PRODUCT_DETAIL}
    render={(props) => (
      <>
        <Header />
        <ProductDetail {...props} />
      </>
    )}
  />,
];
