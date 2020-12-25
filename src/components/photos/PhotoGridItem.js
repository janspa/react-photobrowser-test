import React from 'react'
import './PhotoGridItem.css'

export default function PhotoGridItem({ photo }) {
  return (
    <div className="PhotoGridItem col p-1">
      <img className="PhotoGridItem-thumbnail w-100" src={photo.thumbnailUrl} />
      <div className="small muted text-truncate">
        <em>{photo.title}</em>
      </div>
    </div>
  )
}
