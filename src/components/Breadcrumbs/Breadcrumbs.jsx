/* eslint-disable */
import { useLocation, Link, useNavigate } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  const navigate = useNavigate()

  const location = useLocation()
  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`

      console.log(currentLink)
      return (
        <div className={styles.crumb} key={crumb}>
          {index === array.length - 1 ? (
            <span className={styles.spanLink}>{crumb}</span>
          ) : (
            <Link className={styles.link} to={currentLink}>
              {crumb}
            </Link>
          )}
        </div>
      )
    })

  return <div className={styles.breadCrumbs}>{crumbs}</div>
}
