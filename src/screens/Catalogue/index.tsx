import React, { ChangeEventHandler, useEffect, useState } from 'react'
import AlbumList from '../../components/AlbumList'
import Loader from '../../components/Loader'
import TagList from '../../components/TagList'
import TextInput from '../../components/TextInput'
import TopArtists from '../../components/TopArtists'
import useService from '../../hooks/useService'
import { searchAlbums } from '../../services/last.fm'

const Catalogue: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value)
  }

  const { data, request, pending, clearData } = useService<typeof searchAlbums>(searchAlbums)

  useEffect(() => {
    if (search) {
      request(search)
    } else {
      clearData()
    }
  }, [search])

  return (
    <div className="pb-10">
      <TagList />

      <TopArtists />

      <div className="container m-auto px-4">
        <TextInput onChange={onChange} placeholder="Rechercher un nom d'album..." />
      </div>

      {pending && (
        <div className="flex justify-center items-center m-20">
          <Loader />
        </div>
      )}

      <div>
        <AlbumList data={data ? data.results.albummatches.album : undefined} />

        {data && (
          <div className="my-10 flex justify-center items-center">
            <button className="bg-blue-600 text-white rounded-xl px-24 py-4">Voir plus...</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalogue
