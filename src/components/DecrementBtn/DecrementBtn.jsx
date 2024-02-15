import { ReactComponent as MinusButton } from '../../icons/minus.svg'
// import styles from './DecrementBtn.module.scss'

export const DecrementBtn = ({ onClick, style }) => (
  <button onClick={onClick} type="button" aria-label="Уменьшить">
    <MinusButton className={style} />
  </button>
)
