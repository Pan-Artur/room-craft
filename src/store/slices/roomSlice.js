import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placedFurniture: [],
  mode: "add",
  selectedItem: null,
  floorTheme: "light",
}

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {

  }
})

export const {  } = roomSlice.actions;
export default roomSlice.reducer;