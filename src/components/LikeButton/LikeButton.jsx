/* eslint-disable */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../../features/wishlists/wishSlice'
import styles from './LikeButton.module.scss'

export const LikeButton = (props) => {
  const [color, setColor] = useState(styles.dislike)
  const dispatch = useDispatch()

  const handleChange = () => {
    if (color === styles.like) {
      setColor(styles.dislike)
    } else {
      setColor(styles.like)
    }
    dispatch(addToWishlist(props.dish))
  }

  const combinedClassName = `${props.className} ${color}`

  return (
    <button
      onClick={() => handleChange()}
      type="button"
      aria-label="like"
      className={combinedClassName}
    />
  )
}
