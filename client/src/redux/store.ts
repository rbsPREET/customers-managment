import { configureStore } from '@reduxjs/toolkit'
import customersReducer from './reducers/customersSlice'

export const store = configureStore({
    reducer: {
        customers: customersReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch