import { ChangeEventHandler, useEffect, useState } from 'react'
import { Album, searchAlbums } from '../services/last.fm'
import useService from './useService'

const useCatalogue = () => {
  const defaultLimit = 50
  const [data, setData] = useState<Album[]>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')
  const { data: pageData, request, pending } = useService<typeof searchAlbums>(searchAlbums)

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value)
  }

  useEffect(() => {
    if (search) {
      setCurrentPage(1)
      request(search)
    }
  }, [search])

  const nextPage = () => {}

  return { data, pending, request, currentPage, onSearchChange, defaultLimit }
}

export default useCatalogue
