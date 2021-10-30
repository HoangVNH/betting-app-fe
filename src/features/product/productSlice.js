import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById } from '../../apis/productApi';

export const getProductDetailById = createAsyncThunk(
  "product/getDetailById",
  async (productId) => {
    const response = await getProductById(productId);

    return response.data;
  }
)

const initialState = {
  isLoading: false,
  productDetail: {},
  list: {
    data: {
      results: []
    }
  }
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetailById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductDetailById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload
      });
  },
});

export const selectIsLoadingProduct = state => state.product.isLoading;
export const selectProductDetailData = state => state.product.productDetail;