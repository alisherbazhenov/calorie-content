import { useNavigate } from 'react-router-dom'
import styles from './Error.module.scss'

export const Error = (props) => {
  const navigate = useNavigate()
  const backBtn = () => {
    navigate(-1)
  }

  return (
    <div className={styles.error}>
      <p className={styles.text}>{props.text}</p>
      <button onClick={backBtn} type="button" className={styles.btn}>
        Назад
      </button>
    </div>
  )
}
