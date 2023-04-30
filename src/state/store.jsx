import { configureStore } from '@reduxjs/toolkit'
import eventosReducer from './slicers/eventos'

export const store = configureStore({
  reducer: {
    eventos: eventosReducer,
  },
})