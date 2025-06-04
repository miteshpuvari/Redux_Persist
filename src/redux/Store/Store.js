import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../Reducer/userSlice'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer'] // navigation will not be persisted
}

const rootReducer = combineReducers({
    userReducer: userSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persister = persistStore(store);