import shuffle from '../utils/shuffle'

const apiKey = import.meta.env.VITE_AUDIOSCROBBLER_API_KEY
const baseUrl = 'https://ws.audioscrobbler.com/2.0/'
const defaultParameters = {
  api_key: apiKey as string,
  format: 'json'
}

export interface Album {
  name: string
  mbid: string
  url: string
  artist: string
  streamable: number
  image: {
    '#text': string
    size: string
  }[]
  '@attr': {
    rank: number
  }
}

export interface AlbumListResult {
  results: {
    albummatches: {
      album: Album[]
    }
    'opensearch:totalResults': string
    'opensearch:startIndex': string
    'opensearch:itemsPerPage': string
    '@attr': {
      for: string
    }
  }
}

export const searchAlbums = async (search: string): Promise<AlbumListResult> => {
  const result = await fetch(
    `${baseUrl}?${new URLSearchParams({
      ...defaultParameters,
      method: 'album.search',
      album: search
    })}`
  )

  return result.json()
}

interface Tag {
  name: string
  reach: string
  streamable: string
  taggings: string
  url: string
  wiki: {}
}

export interface TopTagListResult {
  tags: {
    tag: Tag[]
  }
}

export const getTopTags = async (qty: number): Promise<Tag[]> => {
  let result = await fetch(
    `${baseUrl}?${new URLSearchParams({
      ...defaultParameters,
      method: 'chart.getTopTags'
    })}`
  )

  const data: TopTagListResult = await result.json()

  return shuffle<Tag>(data.tags.tag).slice(0, qty)
}

export interface Artist {
  playcount: number
  name: string
  image: {
    '#text': string
    size: string
  }[]
}

export interface TopArtistListResult {
  artists: {
    artist: Artist[]
  }
}

export const getTopArtist = async (qty: number): Promise<Artist[]> => {
  let result = await fetch(
    `${baseUrl}?${new URLSearchParams({
      ...defaultParameters,
      method: 'chart.gettopartists'
    })}`
  )

  const data: TopArtistListResult = await result.json()

  return shuffle<Artist>(data.artists.artist).slice(0, qty)
}
