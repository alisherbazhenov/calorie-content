/* eslint-disable */
import { NavLink } from 'react-router-dom'
import styles from './Baklazhan.module.scss'
import { items } from './consts'

export const Baklazhan = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Baklazhan</h1>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <NavLink
          to="/baklazhan"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav__link')}
        >
          Салаты
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
      <li className={styles.nav__item}>
        <NavLink
          to="/baklazhan"
          className={({ isActive }) => (isActive ? 'active-link' : 'nav__link')}
        >
          Супы
        </NavLink>
      </li>
    </ul>
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <NavLink className={styles.link} to={item.to}>
            <img className={styles.image} src={item.img} alt={item.alt} />
            <div className={styles.dish}>
              <p className={styles.dish__name}>{item.name}</p>
              <p className={styles.dish__calorie}>{item.kcal} Ккал</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)
