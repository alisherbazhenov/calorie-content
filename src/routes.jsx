import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Restaurant } from './pages/Restaurant'
import { NotFoundPage } from './components/NotFoundPage'
import { Wishlist } from './pages/Wishlist'
import { Diet } from './pages/Diet'
import { Dish } from './pages/Dish'
import { Layout } from './layouts/Layout'
import { Category } from './pages/Category'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/restaurants/:restaurantId" element={<Restaurant />}>
        <Route path=":categoryId" element={<Category />} />
      </Route>
      <Route
        path="/restaurants/:restaurantId/:categoryId/:dishId"
        element={<Dish />}
      />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="diet" element={<Diet />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
)
