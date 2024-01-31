/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux'
import {
  cleareAllDiet,
  removeDietItem,
  addToDiet,
  removeDish,
} from '../../features/diets/dietSlice'
import styles from './Diet.module.scss'
import { DecrementBtn } from '../../components/DecrementBtn/DecrementBtn'
import { IncrementBtn } from '../../components/IncrementBtn'
import { DeliteBtn } from '../../components/DeliteBtn/DeliteBtn'

export const Diet = () => {
  const { dietItems } = useSelector((state) => state.diets)
  // const dishAdded = dietItems.find((item) => item.id === item?.id)
  const dispatch = useDispatch()

  // диаграмма
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

      {/* диаграмма */}

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
                <DecrementBtn onClick={() => dispatch(removeDietItem(item))} />
                {/* <DecrementBtn /> */}
                <div className={styles.dishQuantity}>{item.count}</div>
                {/* <div className={styles.dishQuantity}>{0}</div> */}
                {/* <IncrementBtn /> */}
                <IncrementBtn onClick={() => dispatch(addToDiet(item))} />
              </div>
              <DeliteBtn onClick={() => dispatch(removeDish(item.id))} />
            </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
