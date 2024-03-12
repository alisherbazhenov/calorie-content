import React, { FC } from 'react'
import { ReactComponent as PlusButton } from '../../icons/plus.svg'

type IncrementBtnProps = {
  onClick: () => void
}

export const IncrementBtn: FC<IncrementBtnProps> = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Увеличить">
    <PlusButton />
  </button>
)
