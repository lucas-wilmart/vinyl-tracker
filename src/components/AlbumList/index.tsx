import React from "react";
import { Album } from "../../services/audioscrobbler";

import "./styles.css";

interface AlbumListProps {
  data: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ data }) => {
  return (
    <div className="album-list">
      {data.map((item) => {
        const image = item.image.find(
          (img) => img.size === "large" && img["#text"]
        );

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={item.url}
          >
            <div className="album-tile">
              {image && (
                <img
                  src={image["#text"]}
                  alt={`album: ${item.name}`}
                  width="150"
                  height="150"
                />
              )}
              {!image && (
                <div
                  style={{
                    width: 150,
                    height: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Image non disponible
                </div>
              )}
              <div className="album-title">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumList;
