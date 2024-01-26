/* eslint-disable */
import { ReactComponent as Dislike } from '../../icons/dislike.svg'
import { ReactComponent as Like } from '../../icons/like.svg'

export const LikeButton = ({ isActive, onClick }) => {
  return (
    <button type="button" aria-label="like" onClick={onClick}>
      {isActive ? <Like /> : <Dislike />}
    </button>
  )
}
