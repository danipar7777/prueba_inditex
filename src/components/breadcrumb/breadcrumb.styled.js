// vendors
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const BreadCrumbStyled = styled.div`
  display: flex;
  padding: 10px 25px 0 25px;
`;
BreadCrumbStyled.displayName = 'BreadCrumbStyled';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #0090B8;
`;
LinkStyled.displayName = 'LinkStyled';
