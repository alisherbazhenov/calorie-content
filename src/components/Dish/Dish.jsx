/* eslint-disable */

import styles from './Dish.module.scss'
import { ReactComponent as ArrayBack } from '../../icons/arrayBack.svg'
import { NavLink } from 'react-router-dom'

export const Dish = () => (
  <div className={styles.container}>
    <div className={styles.topBlock}>
      <NavLink to="/baklazhan">
        <ArrayBack />
      </NavLink>
      <h2 className={styles.title}>Салат с хрустящими баклажанами</h2>
    </div>
    <img
      className={styles.image}
      src="./img-salads/eggplant.jpg"
      alt="Картинка"
    />
    <div className={styles.favorite}>
      <h3 className={styles.subtitle}>Пищевая ценность</h3>
      <div className={styles.like}></div>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <img className={styles.icon} src="./img/gramm.png" alt="картинка" />
        <span className={styles.span}>вес</span>
        <span className={styles.span}>290 гр</span>
      </li>
      <li className={styles.item}>
        <img className={styles.icon} src="./img/kcal.png" alt="картинка" />
        <span className={styles.span}>ккал</span>
        <span className={styles.span}>745</span>
      </li>
      <li className={styles.item}>
        <img className={styles.icon} src="./img/protein.png" alt="картинка" />
        <span className={styles.span}>б</span>
        <span className={styles.span}>7 гр</span>
      </li>
      <li className={styles.item}>
        <img className={styles.icon} src="./img/fats2.png" alt="картинка" />
        <span className={styles.span}>ж</span>
        <span className={styles.span}>61 гр</span>
      </li>
      <li className={styles.item}>
        <img
          className={styles.icon}
          src="./img/carbohydrates.png"
          alt="картинка"
        />
        <span className={styles.span}>у</span>
        <span className={styles.span}>42 гр</span>
      </li>
    </ul>

    <h3 className={styles.text}>Основные ингридиенты</h3>
    <p className={styles.desc}>
      Баклажан жареный (крахмал, кетчуп,масло растительное), помидоры, кинза,
      лук чивис, сыр творожный, соус (соус сладкий чили, соус устричный)
    </p>
    <p className={styles.thermalProcess}>
      Основной тепловой процесс: <span>жарка</span>
    </p>
    <button className={styles.btn}>Добавиь в рацион</button>
  </div>
)
