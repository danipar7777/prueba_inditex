// vendors
import React from 'react';
import PropTypes from 'prop-types';
// styles
import {
  ProductItemContainerStyled,
  ModelStyled,
} from './product-item.styled';

const ProductItem = ({
  productInfo,
  onClickItem,
}) => {
  const handleClickItem = () => {
    if (onClickItem) {
      onClickItem(productInfo.id);
    }
  };

  return (
    <ProductItemContainerStyled onClick={handleClickItem}>
      <img src={productInfo.imgUrl} alt={productInfo.model} />
      <div>
        <ModelStyled>{productInfo.model}</ModelStyled>
        <p>{productInfo.brand}</p>
        {productInfo.price && <p>{`${productInfo.price}€`}</p>}
      </div>
    </ProductItemContainerStyled>
  );
};

ProductItem.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClickItem: PropTypes.func,
};

ProductItem.defaultProps = {
  onClickItem: () => {},
};

export default ProductItem;
