import { Link, useParams } from 'react-router-dom'
import styles from './Category.module.scss'
import data from '../../data/data.json'

export const Category = () => {
  const params = useParams()
  const restaurant = data.find((item) => item.id === params.restaurantId)
  const { categories } = restaurant
  const { dishes } = categories.find((item) => item.id === params.categoryId)

  return (
    <ul className={styles.list}>
      {dishes.map((item) => (
        <li key={item.id} className={styles.item}>
          <Link className={styles.link} to={item.id}>
            <img className={styles.image} src={item.img} alt={item.alt} />
            <div className={styles.dish}>
              <p className={styles.dishName}>{item.name}</p>
              <p className={styles.dishCalorie}>{item.kcal} Ккал</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
