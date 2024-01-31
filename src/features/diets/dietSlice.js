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

      const dishAdded = state.dietItems?.find(item => item?.id === dishParameters.id)

      if (dishAdded) {
        // Если блюдо уже в диете, увеличиваем количество
        dishAdded.count += 1
      } else {
        // Если блюда нет в диете, добавляем с начальным количеством 1
        state.dietItems?.push({ ...dishParameters, count: 1 })
      }
    },
    removeDietItem: (state, action) => {
      const itemIdToRemove = action.payload;

      const updatedDish = state.dietItems?.find((item) => item?.id === itemIdToRemove.id);

      if (updatedDish && updatedDish.count > 1) {
        // Если у блюда количество больше 1, уменьшаем количество
        updatedDish.count -= 1
      } else {
        // Если у блюда количество 1, удаляем его из диеты
        state.dietItems = state.dietItems?.filter((item) => item?.id !== itemIdToRemove);
      }
    },
    removeDish: (state, action) => {
      const dishToRemove = action.payload

      state.dietItems = state.dietItems?.filter((item) => item?.id !== dishToRemove);
    },
    cleareAllDiet: (state) => {
      state.dietItems = []
    }
  }
})

export const { addToDiet, removeDietItem, removeDish, cleareAllDiet } = dietSlice.actions
export default dietSlice.reducer