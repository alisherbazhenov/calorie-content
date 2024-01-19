/* eslint-disable */
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ArrayBack } from '../../icons/arrayBack.svg'
import {
  removeWishItem,
  clearAllWishlist,
} from '../../features/wishlists/wishSlice'
import styles from './Wishlist.module.scss'

export const Wishlist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { wishlistItems } = useSelector((state) => state.wishlists)

  const removeDishHandle = (item) => {
    dispatch(removeWishItem(item))
  }

  const removeAllWishlist = () => {
    dispatch(clearAllWishlist())
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <button
          onClick={() => navigate(-1)}
          type="button"
          aria-label="Вернуться"
        >
          <ArrayBack />
        </button>
        <h2 className={styles.title}>Список любимых блюд</h2>
      </div>
      <div className={styles.dishNav}>
        <div className={styles.quantity}>
          Колличество блюд ({wishlistItems.length})
        </div>
        <button
          className={styles.removeAll}
          onClick={() => removeAllWishlist()}
          type="button"
          aria-label="Вернуться"
        >
          Удалить все
        </button>
      </div>
      <ul className={styles.list}>
        {wishlistItems.map((item) => {
          // const indexDish = wishlistItems.some((index) => index.id === item.id)
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.link}>
                <img className={styles.image} src={item.img} alt={item.alt} />
                <div className={styles.dish}>
                  <p className={styles.dishName}>{item.name}</p>
                  <p className={styles.dishCalorie}>{item.kcal} Ккал</p>
                  <button
                    onClick={() => removeDishHandle(item.id)}
                    type="button"
                    aria-label="like"
                    className={styles.like}
                  />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// либо так, либо как сейчас в коде
// const removeDishHandle = (dishId) => {
//   dispatch(removeWishItem({ id: dishId }))
// }
// ;<button
//   onClick={() => removeDishHandle(item.id)}
//   type="button"
//   aria-label="like"
//   className={styles.like}
// />
