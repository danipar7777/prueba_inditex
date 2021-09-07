// vendors
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
HeaderStyled.displayName = 'HeaderStyled';

export const HeaderBarContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  background: lightgrey;
`;
HeaderBarContainerStyled.displayName = 'HeaderBarContainerStyled';

export const LogoStyled = styled.img`
  width: 80px;
  cursor: pointer;
`;
LogoStyled.displayName = 'LogoStyled';

export const ShoppingContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
ShoppingContainerStyled.displayName = 'ShoppingContainerStyled';

export const NumberItemsStyled = styled.p`
  font-size: 20px;
  margin-left: 5px;
`;
NumberItemsStyled.displayName = 'NumberItemsStyled';

export const BreadCrumbStyled = styled.div`
  display: flex;
  padding: 10px 25px 0 25px;
`;
BreadCrumbStyled.displayName = 'BreadCrumbStyled';
