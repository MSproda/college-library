import { createSlice } from "@reduxjs/toolkit"

interface BooksSliceState {
    items: any[]
}

const initialState: BooksSliceState = {
    items: []
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setCreateBooks(state, action) {
            state.items.push(action.payload)
        },
        setDeleteBooks(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { setCreateBooks, setDeleteBooks } = booksSlice.actions
export default booksSlice.reducer