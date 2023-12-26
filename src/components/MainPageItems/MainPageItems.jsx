/* eslint-disable */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './MainPageItems.module.scss'
import { ReactComponent as Array } from '../../../src/icons/array.svg'
import { getRestaurants } from '../../api.js/restaurants'
import { SkeletonRestaurants } from '../SkeletonRestaurants/SkeletonRestaurants'

export const MainPageItems = () => {
  const [data, setData] = useState(null)
  // 1 вариант
  // useEffect(() => {
  //   getRestaurants()
  //     .then((result) => {
  //       console.log('data', result)
  //     })
  //     .catch((err) => {
  //       console.log('err', err)
  //     })
  // }, [])

  // 2 вариант
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getRestaurants()
        setData(result)
      } catch (err) {
        console.log('err', err)
      }
    }
    getData()
  }, [])

  if (!data) {
    return <SkeletonRestaurants />
  }

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id} className={styles.item}>
          <Link to={`/restaurants/${item.id}`} className={styles.link}>
            <div className={styles.block}>
              <div className={styles.text}>
                <h2 className={styles.subtitle}>{item.name}</h2>
                <span className={styles.span}>{item.description}</span>
              </div>
              <Array className={styles.array} />
            </div>
            <img className={styles.icon} src={item.img} alt={item.alt} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
