import React, { ChangeEventHandler, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import AlbumList from '../../components/AlbumList'
import Loader from '../../components/Loader'
import useService from '../../hooks/useService'
import { searchAlbums } from '../../services/audioscrobbler'
import './styles.css'

const Catalogue: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value)
  }

  const { data, request, pending } = useService<typeof searchAlbums>(searchAlbums)

  useEffect(() => {
    if (search) {
      request(search)
    }
  }, [search])

  return (
    <div className="search-results">
      <Form.Control onChange={onChange} placeholder="Rechercher un nom d'album..." />

      {pending && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 50
          }}
        >
          <Loader />
        </div>
      )}

      <div>{data && <AlbumList data={data.results.albummatches.album} />}</div>
    </div>
  )
}

export default Catalogue
