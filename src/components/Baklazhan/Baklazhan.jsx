/* eslint-disable */
import { NavLink, Outlet } from 'react-router-dom'
import styles from './Baklazhan.module.scss'

export const Baklazhan = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Baklazhan</h1>
    <nav className={styles.navBlock}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink
            to="salads"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Салаты
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="soups"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Супы
          </NavLink>
        </li>
        {/* <li className={styles.navItem}>
          <NavLink
            to="/breakfasts"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Завтраки
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/coldsnacks"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Холодные закуски
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/coldsnacks"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Холодные закуски
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/coldsnacks"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Холодные закуски
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/coldsnacks"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Холодные закуски
          </NavLink>
        </li> */}
      </ul>
    </nav>

    <Outlet />

    {/* <Routes>
      <Route path="salads" element={<Salads />} />
      <Route path="soups" element={<Soups />} />
    </Routes> */}
  </div>
)
