import { IBookJournal } from './../../models/book-journal.model';
import { createSlice } from "@reduxjs/toolkit"

interface JournalSliceState {
    items: IBookJournal[]
}

const initialState: JournalSliceState = {
    items: []
}

const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        setCreateJournal(state, action) {
            state.items.push(action.payload)
        },
        setDeleteJournal(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { setCreateJournal, setDeleteJournal } = journalSlice.actions
export default journalSlice.reducer