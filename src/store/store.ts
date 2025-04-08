import { configureStore, Middleware } from '@reduxjs/toolkit'
import { usersSlice } from './users/usersSlice'
import { uiSlice } from './ui/uiSlice'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
  // console.log(store.getState())
}

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
