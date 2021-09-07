// vendors
import styled from 'styled-components';

export const ProductDetailContainerStyled = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
ProductDetailContainerStyled.displayName = 'ProductDetailContainerStyled';

export const ProductImageContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
ProductImageContainerStyled.displayName = 'ProductImageContainerStyled';

export const TitleSectionStyled = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 10px;
`;
TitleSectionStyled.displayName = 'TitleSectionStyled';

export const TitleLabelStyled = styled.p`
  padding-bottom: 10px;
  color: #0090B8;
  span, li {
    color: black;
    margin-left: 7px;
  }
`;
TitleLabelStyled.displayName = 'TitleLabelStyled';

export const ActionsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
ActionsContainerStyled.displayName = 'ActionsContainerStyled';

export const ButtonContainerStyled = styled.div`
  margin-top: 10px;
`;
ButtonContainerStyled.displayName = 'ButtonContainerStyled';
