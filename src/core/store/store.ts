import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore, PURGE,
    REGISTER, REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import boockSlice from './slices/books.slice'
import journalSlice from './slices/journal.slice'

const persistConfig = {
    key: 'CHERRY',
    storage,
    whitelist: ['books', 'journal']
}

const rootReducer = combineReducers({
    books: boockSlice,
    journal: journalSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const storePersist = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(storePersist)

export type TypeRootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof storePersist.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector