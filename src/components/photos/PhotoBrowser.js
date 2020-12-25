import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../utils/Pagination'
import PhotoGrid from './PhotoGrid'
import { fetchPhotos } from './photosSlice'

export default function PhotoBrowser() {
  const dispatch = useDispatch()
  const topEl = useRef(null)

  const limitValues = [10, 20, 50, 100]
  const [limit, setLimit] = useState(20)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const photos = useSelector(state => Object.values(state.photos.entities))
  const offset = (page - 1) * limit

  useEffect(async () => {
    setIsLoading(true)
    await dispatch(fetchPhotos())
    setIsLoading(false)
  }, [])

  const handleLimitInput = evt => {
    setLimit(Number.parseInt(evt.target.value))
  }
  const handlePageChange = value => {
    setPage(Number.parseInt(value))
    topEl.current.scrollIntoView()
  }

  return (
    isLoading
      ? <div className="PhotoBrowser" ref={topEl}>
        Loading...
        </div>
      : <div className="PhotoBrowser" ref={topEl}>
        <div className="row small mb-2 mx-2 align-items-center">
          <div className="col">
            Showing {offset + 1} - {offset + limit} of {photos.length} photos
          </div>
          <div className="col-auto">
            <span className="mr-1">Photos per page:</span>
            <select value={limit} className="small" onInput={handleLimitInput}>
              {limitValues.map(v =>
                <option key={v} value={v}>{v}</option>
              )}
            </select>
          </div>
        </div>
        <PhotoGrid
          photos={photos.slice(offset, offset + limit)}
        />
        <div className="text-center my-3">
          <Pagination
            page={page}
            limit={limit}
            total={photos.length}
            items="photos"
            onPageChange={handlePageChange}
          />
        </div>
      </div>
  )
}
