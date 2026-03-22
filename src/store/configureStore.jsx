import { configureStore } from '@reduxjs/toolkit'
import {ytReducer} from '../features/youtubeApp/ytSlice';

    const store = configureStore({
        reducer: {
            youtubeApp : ytReducer,
            
  },
})

export default store;