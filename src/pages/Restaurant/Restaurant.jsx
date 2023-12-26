/* eslint-disable */
import { useEffect, useState } from 'react'
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom'
import styles from './Restaurant.module.scss'
import { getRestaurant } from '../../api.js/restaurants'
import { SkeletonRest } from '../../components/SkeletonRest/SkeletonRest'

export const Restaurant = () => {
  const params = useParams()
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getRestaurant(params.restaurantId)
        setRestaurant(result)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])

  if (!restaurant) {
    return <SkeletonRest />
  }

  const { categories } = restaurant

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
