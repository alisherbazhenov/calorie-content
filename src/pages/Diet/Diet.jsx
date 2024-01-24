import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { cleareAllDiet, removeDietItem } from '../../features/diets/dietSlice'
import { ReactComponent as DeliteButton } from '../../icons/delete.svg'
import { ReactComponent as PlusButton } from '../../icons/plus.svg'
import { ReactComponent as MinusButton } from '../../icons/minus.svg'

import styles from './Diet.module.scss'

export const Diet = () => {
  const { dietItems } = useSelector((state) => state.diets)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Рацион</h1>
      <div className={styles.dishNav}>
        <div className={styles.quantity}>
          Колличество блюд ({dietItems.length})
        </div>
        <button
          className={styles.removeAll}
          onClick={() => dispatch(cleareAllDiet())}
          type="button"
          aria-label="Вернуться"
        >
          Удалить все
        </button>
      </div>
      <ul className={styles.list}>
        {dietItems.map((item) => (
          <li key={item.id} className={styles.item}>
            {/* <Link className={styles.link} to={item.id}> */}
            <div className={styles.itemLeft}>
              <img className={styles.image} src={item.img} alt={item.alt} />
              <div className={styles.itemText}>
                <div className={styles.dishName}>{item.name}</div>
                <div className={styles.dishParametres}>
                  <div className={styles.kcalGm}>
                    {item.kcal}ккал \ вес {item.gm}г
                  </div>
                  <div className={styles.bju}>
                    б&middot;{item.protein}; у&middot;{item.carbohydrates};
                    ж&middot;
                    {item.fat}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <div className={styles.incrementDecrement}>
                <button type="button" aria-label="Уменьшить">
                  <MinusButton />
                </button>
                <div className={styles.dishQuantity}>1</div>
                <button type="button" aria-label="Увеличить">
                  <PlusButton />
                </button>
              </div>
              <button
                onClick={() => dispatch(removeDietItem(item.id))}
                type="button"
                aria-label="Удалить блюдо"
              >
                <DeliteButton />
              </button>
            </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
