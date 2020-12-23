import React, { Component } from 'react'
import PhotoGridItem from './PhotoGridItem'
import APIClient from '../APIClient'

export default class PhotoGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingPhotos: false,
      photos: [],
      limit: 20,
    }
  }

  async componentDidMount() {
    let photos = await APIClient.get('photos')
    console.log(photos)
    this.setState(state => ({
      ...state,
      photos
    }))
  }

  render() {
    return (
      <div className="PhotoGrid row flex-wrap justify-content-center">
        {this.state.photos.slice(0, this.state.limit).map(photo =>
          <PhotoGridItem
            key={photo.id}
            photo={photo}
          />
        )}
      </div>
    )
  }
}
