import React from 'react';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
const { expect } = require('chai');
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import 'jsdom-global/register';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import waitForExpect from 'wait-for-expect';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import * as rrd from 'react-router-dom';

const { MemoryRouter } = rrd;

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);
const initialState = {
  products: [],
};

import mockAxios from './mock-axios';
import { createStore } from 'redux';
import combineReducers from '../../client/store/index';

const app = require('../../server');
const agent = require('supertest')(app);

// import ProductCard from '../components/ProductCard'
import SingleProduct from '../../client/components/SingleProduct';
import {
  fetchProducts,
  fetchTheProducts,
} from '../../client/redux/actions/ProductThunks';
import { fetchSingleProduct } from '../../client/redux/reducers/singleProductReducer';
import store from '../../client/store/index';
const { db, product } = require('../../server/db');
const seed = require('../../server/db/seed');

import Products, {
  Products as UnconnectedAllProducts,
} from '../../client/components/Products';
import Routes from '../../client/Routes';

describe('Products', () => {
  // We'll use this array of products as dummy data for testing purposes
  const products = [
    {
      id: 1,
      name: 'Jumping Frog',
      imageUrl: '/images/jumping_frog.png',
    },
    {
      id: 2,
      name: 'Frog in a Pond',
      imageUrl: '/images/frog_pond.jpeg',
    },
  ];
  beforeEach(() => {
    // mockAxios ensures that when our client-side code requests data from the
    // server, the request is always successful (even if we haven't implemented)
    // our server yet.
    mockAxios.onGet('/api/products').replyOnce(200, products);
  });

  describe('<Products /> component', () => {
    const getProductsSpy = sinon.spy();
    afterEach(() => {
      getProductsSpy.resetHistory();
    });

    it('renders the products passed in as props', () => {
      const loadProducts = jest.fn();
      const wrapper = shallow(
        <UnconnectedAllProducts
          products={products}
          getProducts={getProductsSpy}
          loadProducts={loadProducts}
        />,
      );
      expect(wrapper.text()).to.include('Jumping Frog');
      expect(wrapper.text()).to.include('Frog in a Pond');
      // The test is expecting an image for each campus, with src set to the
      // campus's imageUrl
      const images = wrapper.find('img').map((node) => node.get(0).props.src);
      expect(images).to.include.members([
        '/images/jumping_frog.png',
        '/images/frog_pond.jpeg',
      ]);
    });

    it('renders DIFFERENT products passed in as props', () => {
      const differentProducts = [
        {
          id: 3,
          name: 'Frog On Toilet',
          imageUrl: '/images/frog_toilet.png',
        },
        {
          id: 4,
          name: 'Frog Wallpaper',
          imageUrl: '/images/frog_wallpaper.png',
        },
      ];
      const wrapper = shallow(
        <UnconnectedAllProducts
          products={differentProducts}
          getProducts={getProductsSpy}
        />,
      );
      expect(wrapper.text()).to.not.include('Jumping Frog');
      expect(wrapper.text()).to.not.include('Frog in a Pond');
      expect(wrapper.text()).to.include('Frog On Toilet');
      expect(wrapper.text()).to.include('Frog Wallpaper');
      // The test is expecting an image for each campus, with src set to the
      // campus's imageUrl
      const images = wrapper.find('img').map((node) => node.get(0).props.src);
      expect(images).to.include.members([
        '/images/frog_toilet.png',
        '/images/frog_wallpaper.png',
      ]);
    });

    it('*** renders "No Products" if passed an empty array of products', () => {
      throw new Error('replace this error with your own test');
    });

    // In a later step, we'll create a thunk, and map that thunk to AllCampuses
    // as getCampuses. For right now, we just need to be sure the component
    // calls it after it mounts.
    it('calls this.props.loadProducts after mount', async () => {
      shallow(
        <UnconnectedAllProducts
          products={products}
          getProducts={getProductsSpy}
        />,
      );
      await waitForExpect(() => {
        expect(getProductsSpy).to.have.been.called;
      });
    });
  });
});

describe('Redux', () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = mockStore(initialState);
  });

  // Check out app/redux/campuses.js for these two tests
  describe('set/fetch products', () => {
    it('fetchTheProducts action creator returns a valid action', () => {
      expect(fetchTheProducts(products)).to.deep.equal({
        type: 'SET_PRODUCTS',
        products,
      });
    });

    it('fetchProducts thunk creator returns a thunk that GETs /api/products', async () => {
      await fakeStore.dispatch(fetchProducts());
      const [getRequest] = mockAxios.history.get;
      expect(getRequest).to.not.equal(undefined);
      expect(getRequest.url).to.equal('/api/products');
      const actions = fakeStore.getActions();
      expect(actions[0].type).to.equal('SET_PRODUCTS');
      expect(actions[0].campuses).to.deep.equal(products);
    });
  });

  describe('reducer', () => {
    let testStore;
    beforeEach(() => {
      testStore = createStore(combineReducers);
    });

    it('*** returns the initial state by default', () => {
      throw new Error('replace this error with your own test');
    });

    it('reduces on SET_PRODUCTS action', () => {
      const action = { type: 'SET_PRODUCTS', products };

      const prevState = testStore.getState();
      testStore.dispatch(action);
      const newState = testStore.getState();

      expect(newState.products).to.be.deep.equal(products);
      expect(newState.products).to.not.be.equal(prevState.products);
    });
  });
});

describe('Connect: react-redux', () => {
  // This test is expecting your component to dispatch a thunk after it mounts
  // Remember that getCampuses prop from an earlier test? Now's a good time
  // for a mapDispatch.
  it('initializes campuses from the server when the application loads the /products route', async () => {
    const reduxStateBeforeMount = store.getState();
    expect(reduxStateBeforeMount.products).to.deep.equal([]);
    shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/products']}>
          <Products />
        </MemoryRouter>
      </Provider>,
    );
    await waitForExpect(() => {
      const reduxStateAfterMount = store.getState();
      expect(reduxStateAfterMount.campuses).to.deep.equal(products);
    });
  });

  // This test is expecting your component to render the campuses from the
  // Redux store.  Now's a good time for a mapState.
  it('<Products /> renders products from the Redux store', async () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/products']}>
          <Products />
        </MemoryRouter>
      </Provider>,
    );
    await waitForExpect(() => {
      wrapper.update();

      const { products: reduxProducts } = store.getState();
      reduxProducts.forEach((reduxProduct) => {
        expect(wrapper.text()).to.include(reduxProduct.name);
      });
    });
  });
});

describe('Navigation', () => {
  beforeEach(() => {
    sinon.stub(rrd, 'BrowserRouter').callsFake(({ children }) => {
      return <div>{children}</div>;
    });
  });
  afterEach(() => {
    rrd.BrowserRouter.restore();
  });

  // This test expects that you've set up a Route for AllCampuses.
  // You should take a look at app/components/Routes.js
  it('renders <Products /> at /products', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/products']}>
          <Routes />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.find(Products)).to.have.length(1);
  });
});
