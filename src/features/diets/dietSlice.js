/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export const dietSlice = createSlice({
  name: 'diets',
  initialState: {
    dietItems: localStorage.getItem('diets') ? JSON.parse(localStorage.getItem('diets')) : [],
  },
  reducers: {
    addToDiet: (state, action) => {
      const dishParameters = { ...action.payload }

      state.dietItems.push(dishParameters)
    },
    removeDietItem: (state, action) => {
      const itemIdToRemove = action.payload

      const updatedWishlist = state.dietItems.filter(item => item.id !== itemIdToRemove)

      state.dietItems = updatedWishlist
    },
    cleareAllDiet: (state) => {
      state.dietItems = []
    }
  }
})

export const { addToDiet, removeDietItem, cleareAllDiet } = dietSlice.actions
export default dietSlice.reducer