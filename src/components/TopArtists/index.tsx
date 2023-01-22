import React, { useEffect } from 'react'
import useService from '../../hooks/useService'
import { getTopArtist } from '../../services/last.fm'
import Loader from '../Loader'

interface ITopArtists {}

const TopArtists: React.FC<ITopArtists> = ({}) => {
  const { request, data, pending } = useService<typeof getTopArtist>(getTopArtist)

  useEffect(() => {
    // request(6)
  }, [])

  console.log({ data })

  return <div>{pending && <Loader />}</div>
}

export default TopArtists
