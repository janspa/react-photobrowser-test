import React from 'react'
import PhotoGridItem from './PhotoGridItem'

export default function PhotoGrid({ photos }) {
  return (
    <div className="PhotoGrid row flex-wrap justify-content-center">
      { photos.map(photo =>
        <PhotoGridItem
          key={photo.id}
          photo={photo}
        />
      )}
    </div>
  )
}
