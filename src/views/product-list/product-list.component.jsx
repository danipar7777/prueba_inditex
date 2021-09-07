// vendors
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import SearchBar from '../../components/search-bar/search-bar.component';
import ProductItem from '../../components/product-item/product-item.component';
// services
import { getProductList } from '../../services/products.service';
// styles
import {
  ProductListContainerStyled,
  SearchBarContainerStyled,
  ListItemsStyled,
  ProductItemContainerStyled,
} from './product-list.styled';

const ProductList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const productList = useSelector(({ products }) => products.list.data);
  const expiresAt = useSelector(({ products }) => products.list.expiresAt);
  const [searchText, setSearchText] = useState('');
  const [productListState, setProductListState] = useState([]);

  useEffect(() => {
    if ((productList).length <= 0 || expiresAt < new Date()) {
      dispatch(getProductList());
    }
  }, []);

  useEffect(() => {
    setProductListState(productList);
  }, [productList]);

  const handleGoToItem = (itemId) => {
    history.push(`/${itemId}`);
  };

  const handleSearch = useCallback((evt) => {
    setSearchText(evt.target.value);
    if (evt.target.value === '') {
      setProductListState(productList);
    }
  }, [productList]);

  const handleFilter = useCallback(() => {
    setProductListState(productList.filter(
      (product) => product.brand.toUpperCase().includes(searchText.toUpperCase())
    || product.model.toUpperCase().includes(searchText.toUpperCase()),
    ));
  }, [searchText, productList]);

  return (
    <ProductListContainerStyled>
      <SearchBarContainerStyled>
        <SearchBar
          value={searchText}
          buttonProps={{ disabled: searchText.length <= 0 }}
          onChange={handleSearch}
          onClickButton={handleFilter}
        />
      </SearchBarContainerStyled>
      <ListItemsStyled>
        {productListState.map((product) => (
          <ProductItemContainerStyled key={product.id}>
            <ProductItem
              productInfo={product}
              onClickItem={handleGoToItem}
            />
          </ProductItemContainerStyled>
        ))}
      </ListItemsStyled>
    </ProductListContainerStyled>
  );
};

export default ProductList;
