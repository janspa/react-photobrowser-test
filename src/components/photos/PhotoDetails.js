import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPhotoById } from './photosSlice'
import './PhotoDetails.css'

export default function PhotoDetails() {
  const dispatch = useDispatch()
  const { photoId } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const photo = useSelector(state => state.photos.entities[photoId])


  useEffect(async () => {
    if (!photo) {
      setIsLoading(true)
      await dispatch(fetchPhotoById(photoId))
    }
    setIsLoading(false)
  }, [])

  return (
    isLoading
      ? <div className="px-2">Loading...</div>
      : !photo
        ? <div className="px-2">Photo #{photoId} could not be found.</div>
        : <div className="PhotoDetails">
          <div className="PhotoDetails-photo">
            <img className="" src={photo.url} />
          </div>
          <div className="PhotoDetails-details text-center px-2 py-3">
            <em>{photo.title}</em>
          </div>
    </div>
  )
}
