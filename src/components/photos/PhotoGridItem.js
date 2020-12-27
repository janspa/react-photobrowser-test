import React from 'react'
import { Link } from 'react-router-dom'
import './PhotoGridItem.css'

export default function PhotoGridItem({ photo }) {
  return (
    <div className="PhotoGridItem col mb-1 text-center">
      <Link to={`/details/${photo.id}`}>
        <img className="PhotoGridItem-thumbnail px-1" src={photo.thumbnailUrl} />
      </Link>
      <div className="small muted text-truncate px-1">
        <em>{photo.title}</em>
      </div>
    </div>
  )
}
