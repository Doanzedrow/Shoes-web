import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { decodeJwt } from "../utils/jwt";
import axiosInstance from "../axiosConfigs";

const AuthPrefix = {
  prefix: "/auth",
  register: "auth/register",
  login: "auth/login",
  alluser: "auth/all",
  updateUser: "auth/updateUser3",
  deleteUser: "auth/deleteUser",
};

export const getAllUser = createAsyncThunk(
  AuthPrefix.register,
  async (_, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`${AuthPrefix.prefix}/users`)).data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  AuthPrefix.deleteUser,
  async ({ id }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.delete(`${AuthPrefix.prefix}/user/${id}`))
        .data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  AuthPrefix.updateUser,
  async ({ id, name, email }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.put(`${AuthPrefix.prefix}/user/update`, {
          id,
          name,
          email,
        })
      ).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const registerAsync = createAsyncThunk(
  AuthPrefix.register,
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post(`${AuthPrefix.prefix}/register`, {
          name,
          email,
          password,
        })
      ).data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginAsync = createAsyncThunk(
  AuthPrefix.login,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post(`${AuthPrefix.prefix}/login`, {
          email,
          password,
        })
      ).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      console.log(error.response?.data?.error);
      return rejectWithValue(error.response?.data?.error || "Server Error");
    }
  }
);

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  roles: [],
  accessToken: null,
  refreshToken: null,
  getUserLoading: false,
  allUsers: [],
};

const authSuccess = (state, { payload }) => {
  const { accessToken, user, roles } = payload;
  state.isLoading = false;
  state.isAuthenticated = true;
  state.user = JSON.parse(user);
  state.roles = roles || decodeJwt(accessToken).roles;
  state.accessToken = accessToken;

  localStorage.setItem("accessToken", accessToken);
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    verifiedAuth: authSuccess,
    logout: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.roles = [];
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {};
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: {
    [registerAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [registerAsync.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [registerAsync.rejected]: (state) => {
      state.isLoading = false;
    },
    [loginAsync.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.roles = [];
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
    },
    [loginAsync.fulfilled]: (state, action) => {
      const { access_token, user } = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = user;
      state.roles = decodeJwt(access_token).roles;
      state.accessToken = access_token;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("roles", decodeJwt(access_token).roles);
    },
    [loginAsync.rejected]: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.roles = [];
      state.accessToken = null;
      state.refreshToken = null;
    },
    [getAllUser.pending]: (state) => {
      state.getUserLoading = true;
    },
    [getAllUser.rejected]: (state) => {
      state.isLoading = false;
      state.getUserLoading = false;
    },
    [getAllUser.fulfilled]: (state, { payload }) => {
      state.allUsers = payload;
      state.isLoading = false;
      state.getUserLoading = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
