import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: "",
}

const homeSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData:(state,action)=>{

    }

  }
});

export const {setData} = homeSlice.actions

export default homeSlice.reducer