import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfigs";

const ProductConfigs = {
  prefix: "/product",
  getDetails: "product/getDetails",
  getNews: "product/getNews",
  getHot: "product/getHot",
  getAll: "product/getAll",
  addNew: "product/addNew",
  updateProduct: "product/update",
  addImage: "product/image",
  deleteProduct: "product/delete",
};
export const deleteProduct = createAsyncThunk(
  ProductConfigs.addImage,
  async ({ id }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.delete(`${ProductConfigs.prefix}/${id}`))
        .data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const addProductImage = createAsyncThunk(
  ProductConfigs.addImage,
  async ({ product_id, path }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post(`/productImage/`, {
          product_id,
          path,
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

export const updateProduct = createAsyncThunk(
  ProductConfigs.updateProduct,
  async (
    { id, name, description, content, qty, price, discount },
    { rejectWithValue }
  ) => {
    try {
      return (
        await axiosInstance.put(`${ProductConfigs.prefix}/`, {
          id,
          name,
          description,
          content,
          qty,
          price,
          discount,
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
export const addNewProduct = createAsyncThunk(
  ProductConfigs.getDetails,
  async (
    {
      brand_id,
      product_category_id,
      name,
      description,
      content,
      price,
      qty,
      discount,
      rating,
    },
    { rejectWithValue }
  ) => {
    try {
      return (
        await axiosInstance.post(`${ProductConfigs.prefix}/`, {
          brand_id,
          product_category_id,
          name,
          description,
          content,
          price,
          qty,
          discount,
          rating,
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
export const getProductDetail = createAsyncThunk(
  ProductConfigs.getDetails,
  async ({ id }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`${ProductConfigs.prefix}/${id}`)).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getNewsProduct = createAsyncThunk(
  ProductConfigs.getNews,
  async (_, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`${ProductConfigs.prefix}/news`)).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const getHotsProduct = createAsyncThunk(
  ProductConfigs.getHot,
  async (_, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`${ProductConfigs.prefix}/hots`)).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const getAllProduct = createAsyncThunk(
  ProductConfigs.getAll,
  async (_, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`${ProductConfigs.prefix}/all`)).data;
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
  data: {},
  news: [],
  hots: [],
  allProduct: [],
  error: false,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductDetail.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getNewsProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    },
    [getHotsProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hots = payload;
    },
    [getAllProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProduct.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allProduct = payload;
    },
    [getProductDetail.rejected]: (state) => {
      state.isLoading = false;
      state.data = {};
      state.error = true;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
