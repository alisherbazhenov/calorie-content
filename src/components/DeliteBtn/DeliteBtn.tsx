import React, { FC } from 'react'
import { ReactComponent as DeliteButton } from '../../icons/delete.svg'

type DeliteBtnProps = {
  onClick: () => void
}

export const DeliteBtn: FC<DeliteBtnProps> = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Удалить блюдо">
    <DeliteButton />
  </button>
)
