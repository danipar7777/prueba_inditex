// vendors
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
// icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
// constants
import constants from './constants/header.constants';
// routes
import { PRODUCT_LIST } from '../../constants/routes.constants';
// components
import BreadCrumb from '../breadcrumb/breadcrumb.component';
// styles
import {
  HeaderStyled,
  HeaderBarContainerStyled,
  LogoStyled,
  ShoppingContainerStyled,
  NumberItemsStyled,
  BreadCrumbStyled,
} from './header.styled';

const Header = () => {
  const history = useHistory();
  const productCart = useSelector(({ products }) => products.cart);

  const handleClickLogo = () => {
    history.push(PRODUCT_LIST);
  };

  return (
    <HeaderStyled>
      <HeaderBarContainerStyled>
        <LogoStyled {...constants.LOGO_PROPS} onClick={handleClickLogo} />
        <ShoppingContainerStyled>
          <IconContext.Provider {...constants.ICON_SHOPPING_PROPS}>
            <AiOutlineShoppingCart />
            <NumberItemsStyled>{`(${productCart})`}</NumberItemsStyled>
          </IconContext.Provider>
        </ShoppingContainerStyled>
      </HeaderBarContainerStyled>
      <BreadCrumbStyled>
        <BreadCrumb />
      </BreadCrumbStyled>
    </HeaderStyled>
  );
};

export default Header;
