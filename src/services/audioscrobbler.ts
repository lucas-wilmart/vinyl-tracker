const apiKey = process.env.REACT_APP_AUDIOSCROBBLER_API_KEY;
const baseUrl = "http://ws.audioscrobbler.com/2.0/";
const defaultParameters = {
  api_key: apiKey as string,
  format: "json",
};

export interface Album {
  name: string;
  mbid: string;
  url: string;
  artist: string;
  streamable: number;
  image: {
    "#text": string;
    size: string;
  }[];
  "@attr": {
    rank: number;
  };
}

export interface AlbumListResult {
  results: {
    albummatches: {
      album: Album[];
    };
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    "@attr": {
      for: string;
    };
  };
}

export const searchAlbums = async (
  search: string
): Promise<AlbumListResult> => {
  const result = await fetch(
    `${baseUrl}?${new URLSearchParams({
      ...defaultParameters,
      method: "album.search",
      album: search,
    })}`
  );

  return result.json();
};
