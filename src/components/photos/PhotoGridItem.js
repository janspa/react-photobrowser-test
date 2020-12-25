import React from 'react'
import './PhotoGridItem.css'

export default function PhotoGridItem({ photo }) {
  return (
    <div className="PhotoGridItem col mb-1 text-center">
      <img className="PhotoGridItem-thumbnail px-1" src={photo.thumbnailUrl} />
      <div className="small muted text-truncate px-1">
        <em>{photo.title}</em>
      </div>
    </div>
  )
}
