// vendors
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// constants
import { ROUTES_APP } from '../../constants/routes.constants';
// styles
import {
  BreadCrumbStyled,
  LinkStyled,
} from './breadcrumb.styled';

const BreadCrumb = () => {
  const match = useRouteMatch();
  const routes = ROUTES_APP
    .filter(({ path }) => match.path.includes(path))
    .map(({ path, ...rest }) => ({
      key: path,
      path: Object.keys(match.params).length
        ? Object.keys(match.params).reduce(
          (pathName, param) => pathName.replace(
            `:${param}`, match.params[param],
          ), path,
        )
        : path,
      ...rest,
    }));
  return (
    <BreadCrumbStyled>
      {routes.map(({ path, label }, i) => (i + 1 === routes.length ? label : <LinkStyled key={path} to={path}>{`${label} > `}</LinkStyled>))}
    </BreadCrumbStyled>
  );
};

export default BreadCrumb;
