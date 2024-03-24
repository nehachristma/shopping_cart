import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
     
       
      throw error;
    }
  }
);


const initialState = {
  data: [],
  loading: false,
  error: null,
};


const dataSlice = createSlice({
  name: 'data', // Slice name
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state when the API request is in progress
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state when the API request is successful
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // Handle rejected state when the API request fails
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default dataSlice.reducer;
