import React, { ChangeEventHandler, useEffect, useState } from "react";
import AlbumList from "../../components/AlbumList";
import Loader from "../../components/Loader";
import TextInput from "../../components/TextInput";
import useService from "../../hooks/useService";
import { searchAlbums } from "../../services/audioscrobbler";

const Catalogue: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value);
  };

  const { data, request, pending } =
    useService<typeof searchAlbums>(searchAlbums);

  useEffect(() => {
    if (search) {
      request(search);
    }
  }, [search]);

  return (
    <div>
      <div className="container m-auto px-4">
        <TextInput
          onChange={onChange}
          placeholder="Rechercher un nom d'album..."
        />
      </div>

      {pending && (
        <div className="flex justify-center items-center m-20">
          <Loader />
        </div>
      )}

      <div>
        <AlbumList data={data ? data.results.albummatches.album : undefined} />
      </div>
    </div>
  );
};

export default Catalogue;
