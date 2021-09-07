// vendors
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import * as redux from 'react-redux';
// components
import ProductList from '../product-list.component';
// services
import { getProductList } from '../../../services/products.service';
// mocked module
jest.mock('../../../services/products.service');

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
  }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('ProductList - Tests', () => {
  let wrapper;

  configure({ adapter: new Adapter() });

  beforeEach(() => {
    jest.clearAllMocks();

    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<ProductList />);
  });

  it('wrapper should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should call getProductList on component did mount', async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([]);
    await act(async () => mount(<ProductList />));
    expect(getProductList).toHaveBeenCalled();
  });

  it('should go to handleGoToItem on click item', async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{
      id: 'item', brand: 'Sony', model: 'Sony', imgUrl: 'www.google.com', price: '5',
    }]);
    const wrapper2 = mount(<ProductList />);
    wrapper2.find('ProductItem').props().onClickItem();
    expect(mockHistory).toHaveBeenCalled();
  });

  it('should call handleSearch on searchbar', async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue([{
      id: 'item', brand: 'Sony', model: 'Sony', imgUrl: 'www.google.com', price: '5',
    }]);
    await act(async () => mount(<ProductList />));
    wrapper.find('SearchBar').props().onChange({ target: { value: 'movil' } });
    expect(wrapper.find('SearchBar').props().value).toBe('movil');
  });
});
