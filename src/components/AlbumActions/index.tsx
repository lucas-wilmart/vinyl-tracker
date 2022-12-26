import classNames from "classnames";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  BsFillBookmarkCheckFill,
  BsFillBookmarkPlusFill,
} from "react-icons/bs";

interface IAlbumActions {
  folder?: string;
  onAddToWishList: () => void;
  onAddToCollection: () => void;
  onRemove: () => void;
}

const AlbumActions: React.FC<IAlbumActions> = ({
  folder,
  onAddToCollection,
  onAddToWishList,
  onRemove,
}) => {
  return (
    <div className="flex items-center mt-5 w-full">
      {folder !== "collection" && (
        <button
          onClick={folder === "wishlist" ? onRemove : onAddToWishList}
          className={classNames(
            "album-tile-buttons rounded-l-lg border-wishlist border-r-0 bg-transparent text-wishlist"
          )}
          title={
            folder === "wishlist"
              ? "Retirer de la wishlist"
              : "Ajouter à la wishlist"
          }
        >
          {folder === "wishlist" ? (
            <AiFillStar size={30} />
          ) : (
            <AiOutlineStar size={30} />
          )}
        </button>
      )}
      <button
        onClick={folder === "collection" ? onRemove : onAddToCollection}
        className={classNames("album-tile-buttons border-collection", {
          "bg-collection text-primary-dark rounded-lg": folder === "collection",
          "bg-transparent text-collection rounded-r-lg border-l-gray-500 border-l-2":
            folder !== "collection",
        })}
        title={
          folder === "collection"
            ? "Retirer de la collection"
            : "Ajouter à la collection"
        }
      >
        {folder === "collection" ? (
          <BsFillBookmarkCheckFill size={30} />
        ) : (
          <BsFillBookmarkPlusFill size={30} />
        )}
      </button>
    </div>
  );
};

export default AlbumActions;
