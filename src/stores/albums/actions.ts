import { Album } from '../../services/audioscrobbler'

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
  return {
    type: EActionTypes.ADD_TO_COLLECTION,
    payload: album
  }
}

export const saveAlbumToWishlist = (album: Album) => {
  return {
    type: EActionTypes.ADD_TO_WISHLIST,
    payload: album
  }
}

export const removeAlbum = (url: string) => {
  return {
    type: EActionTypes.REMOVE_ALBUM,
    payload: {
      url
    }
  }
}
