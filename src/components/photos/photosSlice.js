import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PhotoAPI from '../../api/PhotoAPI'

const fetchPhotos = createAsyncThunk('photos/fetchPhotos',
  async () => {
    return await PhotoAPI.get()
  }
)

const fetchPhotoById = createAsyncThunk('photos/fetchPhotoById',
  async (id) => {
    return await PhotoAPI.get(id)
  }
)

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    entities: {},
  },
  reducers: {

  },
  extraReducers: {
    [fetchPhotos.fulfilled]: (state, action) => {
      state.entities = action.payload.reduce((obj, p) => { obj[p.id] = p; return obj }, {})
    },
    [fetchPhotoById.fulfilled]: (state, action) => {
      state.entities[action.payload.id] = action.payload
    },
  }
})

export { fetchPhotos, fetchPhotoById }

export default photosSlice.reducer
