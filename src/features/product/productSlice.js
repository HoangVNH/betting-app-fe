import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById, getAllProducts } from '../../apis/productApi';

export const getProductDetailById = createAsyncThunk(
  "product/getDetailById",
  async (productId) => {
    const response = await getProductById(productId);

    return response.data;
  }
)

export const getProducts = createAsyncThunk(
  "product/getProductList",
  async () => {
    const response = await getAllProducts();

    return response.data;
  }
)

const initialState = {
  isLoading: false,
  productDetail: {
    Products: [
      {
        Auctions: [
          {
            initPrice: '',
            endedAt: '',
            auctioneerId: '',
            binPrice: null,
            createdAt: '',
            endedAt: '',
            BiddingLogs: [
              {
                User: [
                  {
                    firstName: '',
                    lastName: ''
                  }
                ]
              }
            ]
          }
        ],
        ProductSubImages: [
          {
            name: '',
            imagePath: ''
          }
        ],
        ProductDescriptions: [
          {
            description: ''
          }
        ]
      }
    ]

  },
  products: [
    {
      Auctions: [
        {
          initPrice: '',
          endedAt: '',
          auctioneerId: '',
          binPrice: null,
          createdAt: '',
          BiddingLogs: [
            {
              User: [
                {
                  firstName: '',
                  lastName: ''
                }
              ]
            }
          ]
        }
      ],
      ProductSubImages: [
        {
          name: '',
          imagePath: ''
        }
      ],
      ProductDescriptions: [
        {
          description: ''
        }
      ]
    }
  ],
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
      })
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload
      });
  },
});

export const selectIsLoadingProduct = state => state.product.isLoading;
export const selectProductDetailData = state => state.product.productDetail;
export const selectProductData = state => state.product.products;

export default productSlice.reducer;