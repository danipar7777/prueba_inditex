// vendors
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import Button from '../../components/button/button.component';
// services
import { getProductDetail, addProductCart } from '../../services/products.service';
// styles
import {
  ProductDetailContainerStyled,
  ProductImageContainerStyled,
  TitleSectionStyled,
  TitleLabelStyled,
  ActionsContainerStyled,
  ButtonContainerStyled,
} from './product-detail.styled';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productDetail = useSelector(({ products }) => products.detail[params.productId]);
  const [selectors, setSelectors] = useState({ colorCode: '', storageCode: '' });

  useEffect(() => {
    if (!productDetail?.id || productDetail?.expiresAt < new Date()) {
      dispatch(getProductDetail(params.productId));
    }
  }, []);

  useEffect(() => {
    if (productDetail?.options) {
      const { options: { colors, storages } } = productDetail;
      setSelectors({
        colorCode: colors.length > 1 ? '' : colors[0].code,
        storageCode: storages.length > 1 ? '' : storages[0].code,
      });
    }
  }, [productDetail]);

  const handleSelect = (evt) => {
    const { name, value } = evt.target;
    setSelectors((prevState) => ({
      ...prevState,
      [name]: parseInt(value, 10),
    }));
  };

  const handleAddProductCart = useCallback(() => {
    dispatch(addProductCart({
      id: params.productId,
      ...selectors,
    }));
  }, [selectors, params.productId]);

  return (
    <ProductDetailContainerStyled>
      <ProductImageContainerStyled>
        <img src={productDetail?.imgUrl} alt={productDetail?.model} />
      </ProductImageContainerStyled>
      <div>
        <div>
          <TitleSectionStyled>Description</TitleSectionStyled>
          <TitleLabelStyled>
            Brand:
            <span>{productDetail?.brand}</span>
          </TitleLabelStyled>
          <TitleLabelStyled>
            Model:
            <span>{productDetail?.model}</span>
          </TitleLabelStyled>
          {productDetail?.price && (
            <TitleLabelStyled>
              Price:
              <span>{`${productDetail?.price}€`}</span>
            </TitleLabelStyled>
          )}
          <TitleLabelStyled>
            CPU:
            <span>{productDetail?.cpu}</span>
          </TitleLabelStyled>
          <TitleLabelStyled>
            RAM:
            <span>{productDetail?.ram}</span>
          </TitleLabelStyled>
          <TitleLabelStyled>
            OS:
            <span>{productDetail?.os}</span>
          </TitleLabelStyled>
          <TitleLabelStyled>Display resolution:</TitleLabelStyled>
          <ul>
            <li>{productDetail?.displayResolution}</li>
            <li>{productDetail?.displaySize}</li>
            <li>{productDetail?.displayType}</li>
          </ul>
          <TitleLabelStyled>
            Battery:
            <span>{productDetail?.battery}</span>
          </TitleLabelStyled>
          <TitleLabelStyled>Cámeras:</TitleLabelStyled>
          <ul>
            <li>{productDetail?.primaryCamera}</li>
            <li>{productDetail?.secondaryCmera}</li>
          </ul>
          <TitleLabelStyled>
            Dimentions:
            <span>{productDetail?.dimentions}</span>
          </TitleLabelStyled>
          <TitleLabelStyled>
            Weight:
            <span>{productDetail?.weight}</span>
          </TitleLabelStyled>
        </div>
        <ActionsContainerStyled>
          <TitleSectionStyled>Actions</TitleSectionStyled>
          <TitleLabelStyled>Storage:</TitleLabelStyled>
          <select name="storageCode" onChange={handleSelect}>
            <option value="">Select storage</option>
            {productDetail?.options?.storages.map(
              (storage) => (
                <option
                  key={storage.code}
                  value={storage.code}
                  selected={storage.code === selectors.storageCode}
                >
                  {storage.name}
                </option>
              ),
            )}
          </select>
          <TitleLabelStyled>Color:</TitleLabelStyled>
          <select name="colorCode" onChange={handleSelect}>
            <option value="">Select color</option>
            {productDetail?.options?.colors.map(
              (color) => (
                <option
                  key={color.code}
                  value={color.code}
                  selected={color.code === selectors.colorCode}
                >
                  {color.name}
                </option>
              ),
            )}
          </select>
          <ButtonContainerStyled>
            <Button
              buttonProps={{
                disabled: !selectors.colorCode || !selectors.storageCode,
              }}
              onClick={handleAddProductCart}
            >
              Add product
            </Button>
          </ButtonContainerStyled>
        </ActionsContainerStyled>
      </div>
    </ProductDetailContainerStyled>
  );
};

export default ProductDetail;
