import React, { createContext, useContext, useReducer } from 'react'
import albumsReducer, {
  AlbumStoreActionTypes,
  IAlbumStoreState,
  initialState as albumsInitialState
} from './albums/reducer'
import { usePersist, applyPersistToInitialState } from './persist'

export interface IStore {
  albums: IAlbumStoreState
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export type ActionTypes = AlbumStoreActionTypes

interface IContextProps {
  state: IStore
  dispatch: React.Dispatch<any>
}

const StoreContext = createContext({} as IContextProps)

interface IStoreProvider {
  children: React.ReactNode
}

const mainReducer = ({ albums }: IStore, action: any) => ({
  albums: albumsReducer(albums, action)
})

export const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(
    mainReducer,
    applyPersistToInitialState({
      albums: albumsInitialState
    })
  )

  usePersist<IStore>(state, ['albums'], true)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
