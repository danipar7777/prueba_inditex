// vendors
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
// components
import ProductDetail from '../product-detail.component';
// services
import { getProductDetail, addProductCart } from '../../../services/products.service';
// mocked module
jest.mock('../../../services/products.service');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    params: {
      productId: 'idProduct',
    },
  }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn((fn) => fn({
    products: {
      detail: {
        idProduct: {
          expiresAt: Date.now(),
          id: '34324',
          imgUrl: 'www.image.com',
          model: 'Xperia',
          brand: 'Acer',
        },
      },
    },
  })),
}));

describe('ProductDetail - Tests', () => {
  let wrapper;

  configure({ adapter: new Adapter() });

  beforeEach(() => {
    jest.clearAllMocks();

    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<ProductDetail />);
  });

  it('wrapper should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should call getProductDetail on component did mount', async () => {
    await act(async () => mount(<ProductDetail />));
    expect(getProductDetail).toHaveBeenCalled();
  });

  it('should not select color and storage as default', async () => {
    await act(async () => mount(<ProductDetail />));
    expect(wrapper.find('Button').props().buttonProps.disabled).toBeTruthy();
  });

  it('should select color and storage on handleSelect', async () => {
    await act(async () => mount(<ProductDetail />));
    wrapper.find('select').first().props().onChange({ target: { name: 'storageCode', value: 5 } });
    wrapper.find('select').first().props().onChange({ target: { name: 'colorCode', value: 5 } });
    expect(wrapper.find('Button').props().buttonProps.disabled).toBeFalsy();
  });

  it('should call addProductCart', async () => {
    await act(async () => mount(<ProductDetail />));
    wrapper.find('select').first().props().onChange({ target: { name: 'storageCode', value: 5 } });
    wrapper.find('select').first().props().onChange({ target: { name: 'colorCode', value: 5 } });
    wrapper.find('Button').props().onClick();
    expect(addProductCart).toHaveBeenCalled();
  });
});
