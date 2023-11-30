/* eslint-disable */
import styles from './Footer.module.css'
import { ReactComponent as Home } from '../../icons/home1.svg'
import { ReactComponent as Wishlist } from '../../icons/wishlist.svg'
import { ReactComponent as Dislike } from '../../icons/dislike.svg'

const Footer = () => {
  const items = [
    { id: 'home', icon: <Home />, href: '#', title: 'Ссылка на главную' },
    {
      id: 'wishlist',
      icon: <Wishlist />,
      href: '#',
      title: 'Ссылка на страницу списка',
    },
    { id: 'Dislike', icon: <Dislike />, href: '#', title: 'Кнопка лайка' },
  ]

  const listItems = items.map((item) => (
    <li key={item.id} className={styles.item}>
      <a className={styles.link} href={item.href} title={item.title}>
        {item.icon}
      </a>
    </li>
  ))

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>{listItems}</ul>
    </footer>
  )
}

export default Footer
