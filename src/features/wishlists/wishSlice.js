/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: 'wishlists',
  initialState: {
    wishlistItems: localStorage.getItem('wishlists')
      ? JSON.parse(localStorage.getItem('wishlists'))
      : [],
  },
  reducers: {
    addToWishlist: (state, action) => {

      // 1 метод
      // создаю переменную со всеми параметрами блюда
      const dishParameters = { ...action.payload };

      // Проверяю, существует ли уже это блюдо в избранном через метод some. Вернет (true/false)
      const isAlreadyAdded = state.wishlistItems.some(item => item.id === dishParameters.id);

      // Если блюдо еще не добавлено, добавляем его в массив wishlistItems и обновляю localeStorage
      // Иначе, делаю предупреждение
      if (!isAlreadyAdded) {
        state.wishlistItems.push(dishParameters);
        // localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
      } else {
        alert('Данное блюда уже добавлено в ваш Wishlist')
      }

      // 2 метод
      // const itemIndex = state.wishlistItems.findIndex(item => item.id === action.payload.id)

      // if (itemIndex !== -1) {
      //   alert('Данное блюда уже добавлено в ваш Wishlist')
      // } else {
      //   const dishParameters = { ...action.payload };

      //   state.wishlistItems.push(dishParameters);

      //   localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
      // }
    },
    removeWishItem: (state, action) => {
      const itemIdToRemove = action.payload;

      // Использую filter для создания нового массива без элемента, который нужно удалить
      const updatedWishlist = state.wishlistItems.filter(item => item.id !== itemIdToRemove);

      // Обновляю состояние Redux
      state.wishlistItems = updatedWishlist;

      // Обновляю localStorage
      // localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
    },
    clearAllWishlist: (state) => {
      state.wishlistItems = []
      // localStorage.removeItem('wishlistItems');
    },
  },
});

export const { addToWishlist, removeWishItem, clearAllWishlist } = wishSlice.actions
export default wishSlice.reducer