import { ReactComponent as PlusButton } from '../../icons/plus.svg'

export const IncrementBtn = ({ onClick, style }) => (
  <button onClick={onClick} type="button" aria-label="Увеличить">
    <PlusButton className={style} />
  </button>
)
