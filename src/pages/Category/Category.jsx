/* eslint-disable */
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styles from './Category.module.scss'
import { getCategories } from '../../api.js/restaurants'
import { SkeletonDishes } from '../../components/SkeletonDishes'

export const Category = () => {
  const params = useParams()
  const [category, setCategory] = useState(null)

  // const { categoryId } = useParams()
  // console.log(categoryId)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!categoryId) {
  //     navigate(categories[0].id)
  //   }
  // }, [categoryId])

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getCategories({
          restaurantId: params.restaurantId,
          categoryId: params.categoryId,
        })
        setCategory(result)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])

  if (!category) {
    return <SkeletonDishes />
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
