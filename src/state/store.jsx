import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slicers/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})