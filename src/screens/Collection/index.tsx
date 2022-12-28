import React, { ChangeEventHandler, useMemo, useState } from 'react'
import AlbumList from '../../components/AlbumList'
import TextInput from '../../components/TextInput'
import { useStore } from '../../stores'
import { getCollection, searchIntoList } from '../../stores/albums/selectors'

const Collection: React.FC = () => {
  const [search, setSearch] = useState('')
  const { state } = useStore()

  const data = useMemo(() => {
    const result = getCollection(state)

    return search ? searchIntoList(result, search) : result
  }, [state.albums.list, search])

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value)
  }

  return (
    <div>
      <h1 className="mb-8">Votre Collection</h1>

      <div className="container m-auto px-4">
        <TextInput onChange={onSearchChange} placeholder="Rechercher album dans votre collection..." />
      </div>

      <AlbumList data={data} />
    </div>
  )
}

export default Collection
