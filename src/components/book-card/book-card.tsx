import { setCreateJournal } from "@/core/store/slices/journal.slice"
import { useAppDispatch, useAppSelector } from "@/core/store/store"
import { useState } from "react"
import { Spiner } from "../spiner/spiner"

export const BookCard = ({ id, author, name, age, quantity }) => {
    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.journal)

    const [modal, setModal] = useState(false)
    const [loader, setLoader] = useState(false)
    const style = modal ? "left-0" : "left-[100%]"

    const [uname, setUname] = useState('')
    const [surname, setSurname] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [course, setCourse] = useState('')

    const handleClick = () => {
        setLoader(true)

        const book = { id, author, name, age, quantity }

        const data = {
            id: items.length + 1,
            name: uname,
            surname: surname,
            specialization: specialization,
            course: course,
            book: book
        }

        dispatch(setCreateJournal(data))

        setTimeout(() => {
            setLoader(false)
            setModal(false)
        }, 2000)
    }

    return <li className="flex border-[1px] border-solid rounded-md border-[#4f4f4f] overflow-hidden items-stretch" >
        <p className="flex-auto p-3">{author}. {name}. {age}.</p>

        <button onClick={() => setModal(true)} className="flex items-center justify-center bg-[#1983c9] text-white px-2">
            Выдать книгу
        </button>

        <div className={`fixed top-0 w-full h-full bg-[#f1f1f134] flex items-center justify-center ${style}`}>
            <div className="bg-white relative shadow-md rounded-lg w-[400px]">
                <div
                    onClick={() => setModal(false)}
                    className="absolute top-0 right-0 p-2 font-medium"
                >
                    Закрыть
                </div>

                <h2 className="font-medium h-10 mb-5 flex items-center px-3 text-lg">
                    Выдать книгу:
                </h2>

                <div className="px-3 gap-4 flex flex-col mb-5">
                    <input
                        className="bg-[#f1f1f1] rounded-lg px-3 h-10"
                        type="text"
                        placeholder="Имя студента"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                    />
                    <input
                        className="bg-[#f1f1f1] rounded-lg px-3 h-10"
                        type="text"
                        placeholder="Фамилия студента"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <input
                        className="bg-[#f1f1f1] rounded-lg px-3 h-10"
                        type="text"
                        placeholder="Курс"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                    <input
                        className="bg-[#f1f1f1] rounded-lg px-3 h-10"
                        type="text"
                        placeholder="Специальность"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                    />
                </div>

                <div className="px-3 mb-3">
                    <h2 className="font-medium">Книга:</h2>
                    <p>{author}. {name}. {age}</p>
                </div>

                <div className="px-3 w-full">
                    <button
                        onClick={handleClick}
                        className="px-3 relative w-full h-10 flex items-center justify-center text-white rounded-lg bg-[#bb2649] mb-3"
                    >
                        {loader ? <Spiner /> : "Записать в каталог"}
                    </button>
                </div>
            </div>
        </div>
    </li>
}