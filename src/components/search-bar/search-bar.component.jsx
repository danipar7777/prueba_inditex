// vendors
import React from 'react';
import PropTypes from 'prop-types';
// contants
import constants from './constants/search-bar.constants';
// components
import Button from '../button/button.component';
// styles
import {
  InputStyled,
} from './search-bar.styled';

const SearchBar = ({
  onChange,
  value,
  buttonProps,
  onClickButton,
}) => (
  <div>
    <InputStyled onChange={onChange} value={value} {...constants.SEARCH_BAR_PROPS} />
    <Button buttonProps={buttonProps} onClick={onClickButton}>Search</Button>
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  buttonProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchBar;
