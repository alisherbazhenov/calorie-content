/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from '../features/wishlists/wishSlice'

export default configureStore({
  reducer: {
    wishlists: wishlistSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat((store) => (next) => (action) => {
    const result = next(action);
    if (['wishlists/addToWishlist', 'wishlists/clearAllWishlist', 'wishlists/removeWishItem'].includes(action.type)) {
      localStorage.setItem('wishlists', JSON.stringify(store.getState().wishlists));
    }
    // if (['diet/addToDiet'].includes(action.type)) {
    //   localStorage.setItem('diet', JSON.stringify(store.getState().diet));
    // }
    return result;
  })
})