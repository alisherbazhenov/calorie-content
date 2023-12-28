/* eslint-disable */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Category.module.scss'
import { getCategories } from '../../api/restaurants'
import { SkeletonDishes } from '../../components/SkeletonDishes'
import { Error } from '../../errors/Error'
import { NoData } from '../../errors/NoData/NoData'

export const Category = () => {
  const params = useParams()
  const [category, setCategory] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getCategories({
          restaurantId: params.restaurantId,
          categoryId: params.categoryId,
        })
        setCategory(result)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  if (isLoading) {
    return <SkeletonDishes />
  }

  if (error) {
    return <Error text={error} />
  }

  if (!category || category.length === 0) {
    return <NoData text="Нет данных по котегориям блюд..." />
  }

  const { dishes } = category

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
