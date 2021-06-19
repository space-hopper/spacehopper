import React from 'react';
import enzyme from 'enzyme'
const { expect } = require('chai');
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() });
import 'jsdom-global/register';
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import sinon from "sinon";
import { mount } from 'enzyme'
import * as rrd from "react-router-dom";

const { MemoryRouter } = rrd;

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);
const initialState = {
  products: []
};

import mockAxios from "./mock-axios";
import { createStore } from "redux";

const app = require("../../server");
const agent = require("supertest")(app);

// import ProductCard from '../components/ProductCard'
import SingleProduct from '../../client/components/SingleProduct';
import {fetchProducts} from '../../client/redux/reducers/productReducer'
import {fetchSingleProduct} from '../../client/redux/reducers/singleProductReducer'
import store from '../../client/store/index';
const { db, product} = require('../../server/db')
const seed = require('../../server/db/seed')

import Products, {
  Products as UnconnectedAllProducts
} from "../../client/components/Products";
import Routes from "../../client/Routes";

describe("All Products", () => {
  // We'll use this array of campuses as dummy data for testing purposes
  const products = [
    {
      id: 1,
      name: "Jumping Frog",
      imageUrl: "/images/jumping_frog.png"
    },
    {
      id: 2,
      name: "Frog in a Pond",
      imageUrl: "/images/frog_pond.jpeg"
    }
  ];
  beforeEach(() => {
    // mockAxios ensures that when our client-side code requests data from the
    // server, the request is always successful (even if we haven't implemented)
    // our server yet.
    mockAxios.onGet("/api/products").replyOnce(200, products);
  });

  describe("<Products /> component", () => {
    const getProductsSpy = sinon.spy();
    afterEach(() => {
      getProductsSpy.resetHistory();
    });

    it("renders the products passed in as props", () => {
      const wrapper = mount(
        <UnconnectedAllProducts
          products={[products]}
          getProducts={getProductsSpy}
        />
      );
      expect(wrapper.text()).to.include("Jumping Frog");
      expect(wrapper.text()).to.include("Frog in a Pond");
      // The test is expecting an image for each campus, with src set to the
      // campus's imageUrl
      const images = wrapper.find("img").map(node => node.get(0).props.src);
      expect(images).to.include.members([
        "/images/jumping_frog.png",
        "/images/frog_pond.jpeg"
      ]);
    });

    it("renders DIFFERENT products passed in as props", () => {
      const differentProducts = [
        {
          id: 3,
          name: "Frog On Toilet",
          imageUrl: "/images/frog_toilet.png"
        },
        {
          id: 4,
          name: "Frog Wallpaper",
          imageUrl: "/images/frog_wallpaper.png"
        }
      ];
      const wrapper = mount(
        <UnconnectedAllProducts
          products={differentProducts}
          getProducts={getProductsSpy}
        />
      );
      expect(wrapper.text()).to.not.include("Jumping Frog");
      expect(wrapper.text()).to.not.include("Frog in a Pond");
      expect(wrapper.text()).to.include("Frog On Toilet");
      expect(wrapper.text()).to.include("Frog Wallpaper");
      // The test is expecting an image for each campus, with src set to the
      // campus's imageUrl
      const images = wrapper.find("img").map(node => node.get(0).props.src);
      expect(images).to.include.members([
        "/images/frog_toilet.png",
        "/images/frog_wallpaper.png"
      ]);
    });

    it('*** renders "No Products" if passed an empty array of products', () => {
      throw new Error("replace this error with your own test");
    });

    // In a later step, we'll create a thunk, and map that thunk to AllCampuses
    // as getCampuses. For right now, we just need to be sure the component
    // calls it after it mounts.
    it("calls this.props.getProducts after mount", async () => {
      mount(
        <UnconnectedAllProducts
          products={products}
          getProducts={getProductsSpy}
        />
      );
      await waitForExpect(() => {
        expect(getProductsSpy).to.have.been.called;
      });
    });
  });
});