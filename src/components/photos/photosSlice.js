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
    entities: new Map(),
  },
  reducers: {

  },
  extraReducers: {
    [fetchPhotos.fulfilled]: (state, action) => {
      state.entities = new Map(action.payload.map(p => [p.id, p]))
      console.log(state.entities)
    },
    [fetchPhotoById.fulfilled]: (state, action) => {
      state.entities.set(action.payload.id, action.payload)
    },
  }
})

export { fetchPhotos, fetchPhotoById }

export default photosSlice.reducer
