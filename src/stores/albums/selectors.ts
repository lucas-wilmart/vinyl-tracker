import { Album } from '../../services/last.fm'
import { IStore } from './../index'
import { IAlbumStoreData } from './reducer'

export const getAlbumByUrl = (url: string, state: IStore) => state.albums.list.find((item) => item.data.url === url)

const albumStoreDataToAlbum = (item: IAlbumStoreData) => item.data
const filterByFolder = (list: IAlbumStoreData[], folder: string) => list.filter((item) => item.folder === folder)

export const getWishlist = (state: IStore) => filterByFolder(state.albums.list, 'wishlist').map(albumStoreDataToAlbum)
export const getCollection = (state: IStore) =>
  filterByFolder(state.albums.list, 'collection').map(albumStoreDataToAlbum)

export const searchIntoList = (list: Album[], search: string) =>
  list.filter((item) => item.name.toLowerCase().includes(search) || item.artist.toLowerCase().includes(search))
