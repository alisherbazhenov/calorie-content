/* eslint-disable */
import styles from './LikeButton.module.scss'

export const LikeButton = ({ isActive, onClick }) => {
  return (
    <button
      type="button"
      aria-label="like"
      className={isActive ? styles.like : styles.dislike}
      onClick={onClick}
    />
  )
}
