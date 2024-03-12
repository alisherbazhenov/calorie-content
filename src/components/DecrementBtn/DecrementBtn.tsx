import React, { FC } from 'react'
import { ReactComponent as MinusButton } from '../../icons/minus.svg'

type DecrementBtnProps = {
  onClick: () => void
}

export const DecrementBtn: FC<DecrementBtnProps> = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Уменьшить">
    <MinusButton />
  </button>
)
