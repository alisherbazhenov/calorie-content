import { NavLink } from 'react-router-dom'
import { items } from './consts'
import styles from './Soups.module.scss'

export const Soups = () => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li key={item.id} className={styles.item}>
        <NavLink className={styles.link} to={item.to}>
          <img className={styles.image} src={item.img} alt={item.alt} />
          <div className={styles.dish}>
            <p className={styles.dishName}>{item.name}</p>
            <p className={styles.dishCalorie}>{item.kcal} Ккал</p>
          </div>
        </NavLink>
      </li>
    ))}
  </ul>
)
