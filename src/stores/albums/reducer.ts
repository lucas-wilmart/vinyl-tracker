import { Album } from "../../services/audioscrobbler";
import { ActionMap } from "./../index";
import { AlbumsStorePayload, EActionTypes } from "./actions";

export type AlbumStoreActionTypes =
  ActionMap<AlbumsStorePayload>[keyof ActionMap<AlbumsStorePayload>];

export interface IAlbumStoreState {
  wishlist: Album[];
  collection: Album[];
}

export const initialState: IAlbumStoreState = {
  wishlist: [],
  collection: [],
};

const reducer = (
  state: IAlbumStoreState,
  action: AlbumStoreActionTypes
): IAlbumStoreState => {
  const newState = { ...state };

  switch (action.type) {
    case EActionTypes.SAVE_ALBUM:
      if (action.payload.status === "collection") {
        newState.collection.push(action.payload.album);
      } else if (action.payload.status === "wishlist") {
        newState.wishlist.push(action.payload.album);
      }

      return {
        ...newState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
