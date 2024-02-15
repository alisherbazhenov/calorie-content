import { ReactComponent as DeliteButton } from '../../icons/delete.svg'

export const DeliteBtn = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Удалить блюдо">
    <DeliteButton />
  </button>
)
