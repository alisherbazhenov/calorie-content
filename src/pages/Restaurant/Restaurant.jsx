import { useEffect } from 'react'
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom'
import styles from './Restaurant.module.scss'
import data from '../../data/data.json'

export const Restaurant = () => {
  const params = useParams()
  const restaurant = data.find((item) => item.id === params.restaurantId)
  const { categories } = restaurant

  const { categoryId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!categoryId) {
      navigate(categories[0].id)
    }
  }, [categoryId])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{restaurant.name}</h1>
      <nav className={styles.navBlock}>
        <ul className={styles.nav}>
          {categories.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <NavLink
                to={item.id}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
