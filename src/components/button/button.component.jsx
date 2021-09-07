// vendors
import React from 'react';
import PropTypes from 'prop-types';
// styles
import {
  ButtonStyled,
} from './button.styled';

const Button = ({
  labelColor,
  backgroundColor,
  buttonProps,
  onClick,
  children,
}) => (
  <ButtonStyled {...buttonProps} onClick={onClick} type="search" labelColor={labelColor} backgroundColor={backgroundColor}>{children}</ButtonStyled>
);

Button.propTypes = {
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

Button.defaultProps = {
  labelColor: 'white',
  backgroundColor: '#0090B8',
};

export default Button;
