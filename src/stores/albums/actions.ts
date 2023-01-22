import { toast } from 'react-toastify'
import { Album } from '../../services/last.fm'

export enum EActionTypes {
  ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',
  ADD_TO_COLLECTION = 'ADD_TO_COLLECTION',
  REMOVE_ALBUM = 'REMOVE_ALBUM'
}

export type AlbumsStorePayload = {
  [EActionTypes.ADD_TO_WISHLIST]: Album
  [EActionTypes.ADD_TO_COLLECTION]: Album
  [EActionTypes.REMOVE_ALBUM]: {
    url: string
  }
}

export const saveAlbumToCollection = (album: Album) => {
  toast.success(`"${album.name}" a bien été ajouté à votre Collection`)

  return {
    type: EActionTypes.ADD_TO_COLLECTION,
    payload: album
  }
}

export const saveAlbumToWishlist = (album: Album) => {
  toast.success(`"${album.name}" a bien été ajouté à votre Wishlist`)

  return {
    type: EActionTypes.ADD_TO_WISHLIST,
    payload: album
  }
}

export const removeAlbum = (album: Album, type: 'wishlist' | 'collection') => {
  toast.success(`"${album.name}" a bien été retiré de la ${type}`)

  return {
    type: EActionTypes.REMOVE_ALBUM,
    payload: {
      url: album.url
    }
  }
}
