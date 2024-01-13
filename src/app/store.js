import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from '../features/wishlists/wishSlice'

export default configureStore({
  reducer: {
    wishlists: wishlistSlice
  },
})