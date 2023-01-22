import React, { useEffect } from 'react'
import useService from '../../hooks/useService'
import { getTopTags } from '../../services/last.fm'
import Loader from '../Loader'

const TagList: React.FC = () => {
  const { data, request, pending } = useService<typeof getTopTags>(getTopTags)

  useEffect(() => {
    request(10)
  }, [])

  return (
    <div className="mb-5 m-auto p-5 container flex items-center gap-5 flex-wrap">
      {pending && <Loader />}
      {data &&
        data.map((item) => (
          <div className="px-4 py-2 rounded-xl text-white bg-cyan-600 hover:opacity-75 cursor-pointer shadow-lg shadow-slate-800">
            {item.name}
          </div>
        ))}
    </div>
  )
}

export default TagList
