/* eslint-disable */
import styles from './MainPage.module.css'
import restaurants from '../../data/restaurants.json'
import { ReactComponent as Array } from '../../icons/array.svg'

const MainPage = () => {
  const mainItem = restaurants.map((item) => (
    <li key={item.id} className={styles.item}>
      <a href="#" className={styles.link}>
        <div className={styles.block}>
          <div className={styles.text}>
            <h2 className={styles.subtitle}>{item.name}</h2>
            <span className={styles.span}>{item.description}</span>
          </div>
          <Array className={styles.array} />
        </div>
        <img className={styles.icon} src={item.img} alt={item.alt} />
      </a>
    </li>
  ))

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <img
          className={styles.img}
          src="./img/ginza-project.png"
          alt="Логотип"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Выберите ресторан</h1>
          <ul className={styles.list}>{mainItem}</ul>
        </div>
      </div>
    </div>
  )
}

export default MainPage
