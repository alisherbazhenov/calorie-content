import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import { items } from './consts'

export const Footer = () => {
  const listItems = items.map((item) => {
    const setActive = ({ isActive }) => (isActive ? item.iconFill : item.icon)
    return (
      <li key={item.id} className={styles.item}>
        <NavLink className={styles.link} to={item.to} title={item.title}>
          {setActive}
        </NavLink>
      </li>
    )
  })

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>{listItems}</ul>
    </footer>
  )
}
