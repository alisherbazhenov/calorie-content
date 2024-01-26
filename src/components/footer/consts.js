import { ReactComponent as Home } from '../../icons/home1.svg'
import { ReactComponent as HomeFill } from '../../icons/home2.svg'
import { ReactComponent as Wishlist } from '../../icons/wishlist.svg'
import { ReactComponent as WishlistFill } from '../../icons/wishlist2.svg'
import { ReactComponent as Dislike } from '../../icons/dislike.svg'
import { ReactComponent as Like } from '../../icons/like.svg'


export const items = [
  { id: 'home', icon: <Home />, iconFill: <HomeFill />, to: '/', title: 'Ссылка на главную' },
  {
    id: 'wishlist',
    icon: <Wishlist />,
    iconFill: <WishlistFill />,
    to: '/diet',
    title: 'Ссылка на страницу списка',
  },
  { id: 'dislike', icon: <Dislike />, iconFill: <Like />, to: '/wishlist', title: 'Кнопка лайка' },
]