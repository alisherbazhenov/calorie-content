import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'
import data from '../../data/data.json'
import { ReactComponent as Array } from '../../icons/array.svg'

export const MainPage = () => {
  const mainItem = data.map((item) => (
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
  ))

  return (
    <div className={styles.content}>
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
