import { IBook } from './book.model';
export interface IBookJournal {
    id: number
    name: string
    surname: string
    specialization: string
    course: string
    book: IBook
}