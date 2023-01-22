import { Album } from '../../services/last.fm'
import { ActionMap } from './../index'
import { AlbumsStorePayload, EActionTypes } from './actions'

export type AlbumStoreActionTypes = ActionMap<AlbumsStorePayload>[keyof ActionMap<AlbumsStorePayload>]

export interface IAlbumStoreData {
  data: Album
  folder: 'wishlist' | 'collection'
}

export interface IAlbumStoreState {
  list: IAlbumStoreData[]
}

export const initialState: IAlbumStoreState = {
  list: []
}

const reducer = (state: IAlbumStoreState, action: AlbumStoreActionTypes): IAlbumStoreState => {
  const newList = [...state.list]

  const findAlbumIndexByUrl = (url: string) => newList.findIndex((item) => item.data.url === url)

  let albumIndex

  switch (action.type) {
    case EActionTypes.ADD_TO_WISHLIST:
      if (findAlbumIndexByUrl(action.payload.url) === -1) {
        newList.push({ data: action.payload, folder: 'wishlist' })
      }

      return {
        ...state,
        list: newList
      }

    case EActionTypes.ADD_TO_COLLECTION:
      albumIndex = findAlbumIndexByUrl(action.payload.url)

      if (albumIndex !== -1) {
        newList.splice(albumIndex, 1)
      }

      newList.push({ data: action.payload, folder: 'collection' })

      return {
        ...state,
        list: newList
      }

    case EActionTypes.REMOVE_ALBUM:
      albumIndex = findAlbumIndexByUrl(action.payload.url)
      if (albumIndex !== -1) {
        newList.splice(albumIndex, 1)
      }

      return {
        ...state,
        list: newList
      }

    default:
      return {
        ...state
      }
  }
}

export default reducer
