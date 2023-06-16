import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfigs";

const CartConfigs = {
  prefix: "/cart",
  getCart: "cart/getDetails",
  addNewCart: "cart/getNews",
  changeQuantity: "cart/getHot",
  deleteCart: "cart/deleteCart",
  updateCart: "cart/updateCart",
};

export const getCart = createAsyncThunk(
  CartConfigs.getCart,
  async (_, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`${CartConfigs.prefix}/all`)).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const updateToCart = createAsyncThunk(
  CartConfigs.addNewCart,
  async ({ product_id, size, quantity }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post(`${CartConfigs.prefix}/`, {
          product_id,
          size,
          quantity,
        })
      ).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const deleteCart = createAsyncThunk(
  CartConfigs.deleteCart,
  async ({ cart_item_id }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.delete(`${CartConfigs.prefix}/${cart_item_id}`)
      ).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const updateCart = createAsyncThunk(
  CartConfigs.updateCart,
  async ({ cart_item_id, quantity }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.put(`${CartConfigs.prefix}/`, {
          cart_item_id,
          quantity,
        })
      ).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: false,
  data: {},
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
