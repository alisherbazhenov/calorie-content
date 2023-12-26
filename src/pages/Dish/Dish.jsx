/* eslint-disable */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'
import { ReactComponent as ArrayBack } from '../../icons/arrayBack.svg'
import { getDish } from '../../api.js/restaurants'
import { SkeletonDish } from '../../components/SkeletonDish/SkeletonDish'

export const Dish = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [dish, setDish] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDish({
          restaurantId: params.restaurantId,
          categoryId: params.categoryId,
          dishId: params.dishId,
        })
        setDish(result)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])

  if (!dish) {
    return <SkeletonDish />
  }

  // if (!dish.name) {
  //   return <div>Такого блюда к сожалению нет!</div>
  // }

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
        <h2 className={styles.title}>{dish.name}</h2>
      </div>
      <img className={styles.image} src={dish.img} alt={dish.alt} />
      <div className={styles.favorite}>
        <h3 className={styles.subtitle}>Пищевая ценность</h3>
        <div className={styles.like} />
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.icon} src="/img/gramm.png" alt="картинка" />
          <span className={styles.span}>вес</span>
          <span className={styles.span}>{dish.gm} гр</span>
        </li>
        <li className={styles.item}>
          <img className={styles.icon} src="/img/kcal.png" alt="картинка" />
          <span className={styles.span}>ккал</span>
          <span className={styles.span}>{dish.kcal}</span>
        </li>
        <li className={styles.item}>
          <img className={styles.icon} src="/img/protein.png" alt="картинка" />
          <span className={styles.span}>б</span>
          <span className={styles.span}>{dish.protein} гр</span>
        </li>
        <li className={styles.item}>
          <img className={styles.icon} src="/img/fats2.png" alt="картинка" />
          <span className={styles.span}>ж</span>
          <span className={styles.span}>{dish.fat} гр</span>
        </li>
        <li className={styles.item}>
          <img
            className={styles.icon}
            src="/img/carbohydrates.png"
            alt="картинка"
          />
          <span className={styles.span}>у</span>
          <span className={styles.span}>{dish.carbohydrates} гр</span>
        </li>
      </ul>

      <h3 className={styles.text}>Основные ингридиенты</h3>
      <p className={styles.desc}>{dish.ingredients}</p>
      <p className={styles.thermalProcess}>
        Основной тепловой процесс: <span>{dish.cookingProcess}</span>
      </p>
      <button className={styles.btn} type="button">
        Добавить в рацион
      </button>
    </div>
  )
}
