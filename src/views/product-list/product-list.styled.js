// vendors
import styled from 'styled-components';

export const ProductListContainerStyled = styled.div`
  padding: 20px;
`;
ProductListContainerStyled.displayName = 'ProductListContainerStyled';

export const SearchBarContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
SearchBarContainerStyled.displayName = 'SearchBarContainerStyled';

export const ListItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
ListItemsStyled.displayName = 'ListItemsStyled';

export const ProductItemContainerStyled = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  @media only screen and (max-width: 1024px) {
    width: 33%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
ProductItemContainerStyled.displayName = 'ProductItemContainerStyled';
