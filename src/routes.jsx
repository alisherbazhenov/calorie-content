import { Route, Routes } from 'react-router-dom'
import { MainPage } from './components/Mainpage'
import { Baklazhan } from './components/Baklazhan/Baklazhan'
import { Veranda } from './components/Veranda'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage'
import { Wishlist } from './components/Wishlist/Wishlist'
import { Diet } from './components/Diet/Diet'
import { Dish } from './components/Dish'
import { Layout } from './components/Layout/Layout'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="baklazhan" element={<Baklazhan />} />
      <Route path="veranda" element={<Veranda />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="diet" element={<Diet />} />
      <Route path="dish" element={<Dish />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
)
