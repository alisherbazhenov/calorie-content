import { useDispatch, useSelector } from 'react-redux'
import { removeWishItem, clearAllWishlist } from '../../features/wishlists/wishSlice'
import styles from './Wishlist.module.scss'
import { LikeButton } from '../../components/LikeButton'

export const Wishlist = () => {
  const dispatch = useDispatch()
  const { wishlistItems } = useSelector(state => state.wishlists)
  const isActive = wishlistItems.find(item => item.id === item.id)

  const removeAllWishlist = () => {
    dispatch(clearAllWishlist())
  }

  const handleAddOrRemoveDish = dish => {
    if (isActive) {
      // event.preventDefault()
      dispatch(removeWishItem(dish.id))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <h2 className={styles.title}>Список любимых блюд</h2>
      </div>
      <div className={styles.dishNav}>
        <div className={styles.quantity}>Колличество блюд ({wishlistItems?.length})</div>
        <button className={styles.removeAll} onClick={() => removeAllWishlist()} type="button" aria-label="Вернуться">
          Удалить все
        </button>
      </div>
      <ul className={styles.list}>
        {wishlistItems.map(item => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.link}>
                {/* <Link
                  to={`/restaurants/${item.restaurantId}/${item.categoryId}/${item.id}`}
                > */}
                <img className={styles.image} src={item.img} alt={item.alt} />
                {/* </Link> */}
                <div className={styles.dish}>
                  <p className={styles.dishName}>{item.name}</p>
                  <p className={styles.dishCalorie}>{item.kcal} Ккал</p>
                  <div className={styles.btnRemove}>
                    <LikeButton isActive={isActive} onClick={() => handleAddOrRemoveDish(item)} />
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
