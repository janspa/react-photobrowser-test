import { combineReducers } from 'redux'

import photosReducer from '../components/photos/photosSlice'

const rootReducer = combineReducers({
  photos: photosReducer,
})

export default rootReducer
