/* eslint-disable */
import { NavLink } from 'react-router-dom'
import styles from './Baklazhan.module.scss'
import { Salads } from '../Salads'
// import { Soups } from '../Soups/Soups'
// import { Routes, Route } from 'react-router-dom'

export const Baklazhan = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Baklazhan</h1>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <NavLink
          to="/salads"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav__link')}
        >
          Салаты
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink
          to="/soups"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav__link')}
        >
          Супы
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink
          to="/baklazhan"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav__link')}
        >
          Завтраки
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink
          to="/baklazhan"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav__link')}
        >
          Холодные закуски
        </NavLink>
      </li>
    </ul>
    <Salads />
    {/* <Routes>
      <Route path="/salads" element={<Salads />} />
      <Route path="/salads" element={<Soups />} />
    </Routes> */}
  </div>
)
