import { IStore } from './../index'

export const getAlbumByUrl = (url: string, state: IStore) => state.albums.list.find((item) => item.data.url === url)
