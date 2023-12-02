import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import styles from './Layout.module.scss'

export const Layout = () => (
  <main className={styles.main}>
    <Outlet />
    <Footer />
  </main>
)
