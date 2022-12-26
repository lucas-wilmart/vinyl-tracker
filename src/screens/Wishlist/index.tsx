import React from 'react'
import AlbumList from '../../components/AlbumList'
import { useStore } from '../../stores'
import { getWishlist } from '../../stores/albums/selectors'

const Wishlist: React.FC = () => {
  const { state } = useStore()

  const data = getWishlist(state)

  return (
    <div>
      <AlbumList data={data} />
    </div>
  )
}

export default Wishlist
