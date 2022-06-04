import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import parkingsService from "./parkingsService";

const initialState = {
    favoriteParkings: null,
    recentlyVisitedParkings: null,
    parkings: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// get All Parkings
export const getAllParkings = createAsyncThunk(
    "getallparkings",
    async (thunkAPI) => {
      try {
        return await parkingsService.getAllParkings();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

// get All Parkings
export const getRecentlyVisitedParkings = createAsyncThunk(
  "getrecentlyvisitedparkings",
  async (userId,thunkAPI) => {
    try {
      return await parkingsService.getRecentlyVisitedParkings(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFavoriteParkings = createAsyncThunk(
  "getfavoriteparkings",
  async (userId,thunkAPI) => {
    try {
      return await parkingsService.getFavoriteParkings(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

  export const parkingsSlice = createSlice({
    name: "parkings",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
      purge: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
        state.parkings = null;
        state.recentlyVisitedParkings = null;
        state.favoriteParkings = null;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllParkings.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getAllParkings.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.parkings = action.payload.data;
        })
        .addCase(getAllParkings.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.parkings = null;
        })
        .addCase(getRecentlyVisitedParkings.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getRecentlyVisitedParkings.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.recentlyVisitedParkings = action.payload.data.parkings;
        })
        .addCase(getRecentlyVisitedParkings.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.recentlyVisitedParkings = null;
        })
        .addCase(getFavoriteParkings.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getFavoriteParkings.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.favoriteParkings = action.payload.data;
        })
        .addCase(getFavoriteParkings.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.favoriteParkings = null;
        })
    },
  });
  
  export const { reset,purge } = parkingsSlice.actions;
  export default parkingsSlice.reducer;