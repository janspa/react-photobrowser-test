import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PhotoGridItem from './PhotoGridItem'
import { fetchPhotos } from './photosSlice'

export default function PhotoGrid() {
  const [limit, setLimit] = useState(20)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const photos = useSelector(state => Array.from(state.photos.entities.values()))
  const offset = () => (page - 1) * limit

  const dispatch = useDispatch()

  useEffect(async () => {
    setIsLoading(true)
    console.log(fetchPhotos)
    await dispatch(fetchPhotos())
    setIsLoading(false)
  }, [])

  return (
    <div className="PhotoGrid row flex-wrap justify-content-center">
      {isLoading
        ? <div>Loading...</div>
        : photos.slice(offset(), offset() + limit).map(photo =>
          <PhotoGridItem
            key={`photo-${photo.id}`}
            photo={photo}
          />
        )}
    </div>
  )
}
