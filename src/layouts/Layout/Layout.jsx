import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './Layout.module.scss'

export const Layout = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </div>
  </div>
)
