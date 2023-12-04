import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import styles from './Layout.module.scss'

export const Layout = () => (
  <div className={styles.wrapper}>
    <Outlet />
    <Footer />
  </div>
)
