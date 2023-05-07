import { configureStore } from '@reduxjs/toolkit'
import eventosReducer from './slicers/eventos'
import talleresReducer from './slicers/talleres'
import noticiasReducer from './slicers/noticias'

export const store = configureStore({
  reducer: {
    eventos: eventosReducer,
    noticias: noticiasReducer,
    talleres: talleresReducer,
  },middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['Tallere/update/fulfilled', ],
      // Ignore these field paths in all actions
      // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      // ignoredPaths: ['items.dates'],
    },
  }),
})