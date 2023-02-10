import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        value: false,
    },
    reducers: {
      setLoadingTrue: (state) => {
        state.value = true;
      },
      setLoadingFalse: (state) => {
        state.value = false;
      },
    },
  });
  
  export const { setLoadingTrue, setLoadingFalse } =
    loadingSlice.actions;
  
  export const selectLoading = (state) => state.loading.value;
  
  export default loadingSlice.reducer;