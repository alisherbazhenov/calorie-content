import React, { FC } from 'react'
import { ReactComponent as Dislike } from '../../icons/dislike.svg'
import { ReactComponent as Like } from '../../icons/like.svg'

type LikeButtonProps = {
  isActive: boolean
  onClick: () => void
}

export const LikeButton: FC<LikeButtonProps> = ({ isActive, onClick }) => {
  return (
    <button type="button" aria-label="like" onClick={onClick}>
      {isActive ? <Like /> : <Dislike />}
    </button>
  )
}
