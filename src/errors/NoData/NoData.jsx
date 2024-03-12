import { useNavigate } from 'react-router-dom'
import styles from './NoData.module.scss'

export const NoData = props => {
  const navigate = useNavigate()
  const backBtn = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <p className={styles.text}>{props.text}</p>
        <button onClick={backBtn} type="button" className={styles.btn}>
          Назад
        </button>
      </div>
    </div>
  )
}
