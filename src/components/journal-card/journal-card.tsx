import { setDeleteJournal } from "@/core/store/slices/journal.slice"
import { useAppDispatch } from "@/core/store/store"

export const JournalCard = ({ id, name, surname, specialization, course, book }) => {
    const dispatch = useAppDispatch()

    return <div className="bg-white relative shadow-md rounded-lg p-4 w-auto">
        <div onClick={() => dispatch(setDeleteJournal(id))} className="absolute top-2 right-2">
            <img className="w-[25px] h-[25px]" src="/delete.svg" alt="icon" />
        </div>

        <p className="flex pr-4">
            Студент: {name} {surname}
        </p>

        <p>Курс: {course}</p>

        <p>Специальность: {specialization}</p>

        <p>Книга: {book.author}. {book.name}. {book.age} </p>
    </div>
}