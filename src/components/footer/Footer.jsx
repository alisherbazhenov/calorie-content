/* eslint-disable */
import styles from './Footer.module.css'
import { ReactComponent as Home } from '../../icons/home1.svg'
import { ReactComponent as Wishlist } from '../../icons/wishlist.svg'
import { ReactComponent as Dislike } from '../../icons/dislike.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            <Home className={styles.icon} />
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            <Wishlist className={styles.icon} />
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            <Dislike className={styles.icon} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
