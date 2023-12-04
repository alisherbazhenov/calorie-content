import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import { items } from './consts'

export const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.list}>
      {items.map((item) => {
        const getIcon = ({ isActive }) => (isActive ? item.iconFill : item.icon)
        return (
          <li key={item.id} className={styles.item}>
            <NavLink className={styles.link} to={item.to} title={item.title}>
              {getIcon}
            </NavLink>
          </li>
        )
      })}
    </ul>
  </footer>
)
