import React from "react";
import { Album } from "../../services/audioscrobbler";
import "./styles.css";
import { useStore } from "../../stores";
import {
  removeAlbum,
  saveAlbumToCollection,
  saveAlbumToWishlist,
} from "../../stores/albums/actions";
import { getAlbumByUrl } from "../../stores/albums/selectors";
import AlbumActions from "../AlbumActions";

interface AlbumListProps {
  data?: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ data }) => {
  const { dispatch, state } = useStore();

  const onSaveAlbumToCollection = (album: Album) => {
    dispatch(saveAlbumToCollection(album));
  };

  const onSaveAlbumToWishlist = (album: Album) => {
    dispatch(saveAlbumToWishlist(album));
  };

  const onRemoveAlbum = (album: Album) => {
    dispatch(removeAlbum(album.url));
  };

  return (
    <div className="album-list">
      {!data && (
        <div className="container m-auto text-white text-xl py-10 px-24 text-center opacity-40">
          Rechercher des albums pour les ajouter à votre collection ou les
          sauvegarder dans votre wishlist
        </div>
      )}
      {data &&
        data.map((item) => {
          const image = item.image.find(
            (img) => img.size === "large" && img["#text"]
          );

          const storedAlbum = getAlbumByUrl(item.url, state);

          const folder = storedAlbum ? storedAlbum.folder : undefined;

          const onRemove = () => {
            onRemoveAlbum(item);
          };

          const onAddToWishList = () => {
            onSaveAlbumToWishlist(item);
          };

          const onAddToCollection = () => {
            onSaveAlbumToCollection(item);
          };

          return (
            <div className="flex justify-center items-center" key={item.url}>
              <div
                className="p-8 rounded-md flex flex-col justify-center items-center bg-primary-dark border border-white shadow-xl"
                style={{ width: 220 }}
              >
                {image && (
                  <img
                    src={image["#text"]}
                    className="rounded-md"
                    alt={`album: ${item.name}`}
                    width="150"
                    height="150"
                  />
                )}
                {!image && (
                  <div
                    className="flex justify-center items-center"
                    style={{
                      width: 150,
                      height: 150,
                    }}
                  >
                    Image non disponible
                  </div>
                )}
                <div className="album-title mb-5">{item.name}</div>

                <AlbumActions
                  folder={folder}
                  onAddToCollection={onAddToCollection}
                  onAddToWishList={onAddToWishList}
                  onRemove={onRemove}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AlbumList;
