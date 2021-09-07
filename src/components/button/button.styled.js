// vendors
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ButtonStyled = styled.button`
  background-color: ${(({ backgroundColor, disabled }) => (disabled ? '#afafaf' : backgroundColor))};
  border: none;
  border-radius: 5px;
  color: ${(({ labelColor }) => labelColor)};
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: ${(({ disabled }) => (disabled ? 'inherit' : 'pointer'))};
`;
ButtonStyled.displayName = 'ButtonStyled';
