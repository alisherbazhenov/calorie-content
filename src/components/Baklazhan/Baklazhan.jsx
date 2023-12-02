/* eslint-disable */
import styles from './Baklazhan.module.scss'

export const Baklazhan = () => (
  <container className={styles.container}>
    <h1 className={styles.title}>Baklazhan</h1>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="#" title="Блюдо 1">
          <img src="./img/BEL_5879" alt="Паста болоньезе" />
          <h3 className={styles.subtitle}>Паста болоньезе</h3>
          <p className={styles.text}>Бла бла бла состав такой-то и такой-то</p>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#" title="Блюдо 2">
          <img src="./img/BEL_5879" alt="Паста болоньезе" />
          <h3 className={styles.subtitle}>Плов</h3>
          <p className={styles.text}>Бла бла бла состав такой-то и такой-то</p>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#" title="Блюдо 3">
          <img src="./img/BEL_5879" alt="Паста болоньезе" />
          <h3 className={styles.subtitle}>Хачапури</h3>
          <p className={styles.text}>Бла бла бла состав такой-то и такой-то</p>
        </a>
      </li>
    </ul>
  </container>
)
