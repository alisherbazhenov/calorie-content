/* eslint-disable */
import { useLocation, Link, useMatches } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  // let matches = useMatches()
  // let crumbs = matches

  //   .filter((match) => Boolean(match.handle?.crumb))
  //   .map((match) => match.handle.crumb(match.data))

  // return (
  //   <div className={styles.crumb}>
  //     {crumbs.map((crumb, index) => (
  //       <li key={index}>{crumb}</li>
  //     ))}
  //   </div>
  // )

  const location = useLocation()
  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`
      if (array.length === 1) {
        return false
      } else {
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
      }
    })

  return <div className={styles.breadCrumbs}>{crumbs}</div>
}
