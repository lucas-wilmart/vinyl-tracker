import { Album } from "../../services/audioscrobbler";

export enum EActionTypes {
  SAVE_ALBUM = "SAVE_ALBUM",
  REMOVE_ALBUM = "REMOVE_ALBUM",
}

export type AlbumsStorePayload = {
  [EActionTypes.SAVE_ALBUM]: {
    album: Album;
    status: "wishlist" | "collection";
  };
  [EActionTypes.REMOVE_ALBUM]: {
    url: string;
  };
};

export const saveAlbum = (album: Album, status: "wishlist" | "collection") => {
  return {
    type: EActionTypes.SAVE_ALBUM,
    payload: {
      album,
      status,
    },
  };
};

export const removeAlbum = (url: string) => {
  return {
    type: EActionTypes.REMOVE_ALBUM,
    payload: {
      url,
    },
  };
};
