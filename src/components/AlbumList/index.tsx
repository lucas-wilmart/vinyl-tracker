import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Album } from '../../services/audioscrobbler'
import { AiOutlineStar } from 'react-icons/ai'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'

import './styles.css'
import { useStore } from '../../stores'
import { saveAlbumToCollection, saveAlbumToWishlist } from '../../stores/albums/actions'
import { getAlbumByUrl } from '../../stores/albums/selectors'

interface AlbumListProps {
  data: Album[]
}

const AlbumList: React.FC<AlbumListProps> = ({ data }) => {
  const { dispatch, state } = useStore()

  console.log({ state })

  const onSaveAlbumToCollection = (album: Album) => {
    dispatch(saveAlbumToCollection(album))
  }

  const onSaveAlbumToWishlist = (album: Album) => {
    dispatch(saveAlbumToWishlist(album))
  }

  return (
    <div className="album-list">
      {data.map((item) => {
        const image = item.image.find((img) => img.size === 'large' && img['#text'])

        const storedAlbum = getAlbumByUrl(item.url, state)

        const onAddToWishList = () => {
          onSaveAlbumToWishlist(item)
        }

        const onAddToCollection = () => {
          onSaveAlbumToCollection(item)
        }

        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            key={item.url}
          >
            <div className="album-tile">
              {image && <img src={image['#text']} alt={`album: ${item.name}`} width="150" height="150" />}
              {!image && (
                <div
                  style={{
                    width: 150,
                    height: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  Image non disponible
                </div>
              )}
              <div className="album-title">{item.name}</div>

              <ButtonGroup
                style={{
                  marginTop: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  width: '100%'
                }}
              >
                <Button
                  size="sm"
                  variant="warning"
                  style={{
                    backgroundColor: '#282C34',
                    color: '#F9CA33',
                    padding: '10px 0'
                  }}
                  title="Ajouter à la Wishlist"
                  onClick={onAddToWishList}
                >
                  <AiOutlineStar size={30} />
                </Button>
                <Button
                  size="sm"
                  variant="info"
                  style={{
                    backgroundColor: '#282C34',
                    color: '#5CD0F2',
                    padding: '10px 0'
                  }}
                  title="Ajouter à la Collection"
                  onClick={onAddToCollection}
                >
                  <BsFillBookmarkPlusFill size={30} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AlbumList
