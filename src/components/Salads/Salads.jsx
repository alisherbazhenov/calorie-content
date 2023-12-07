import { NavLink } from 'react-router-dom'
import styles from './Salads.module.scss'
import { items } from './consts'

export const Salads = () => (
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
)
