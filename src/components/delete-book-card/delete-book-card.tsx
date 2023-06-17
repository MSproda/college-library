import { IBook } from "@/core/models/book.model"
import { AccessModal } from "@/modals/access-modal/access-modal"
import { useEffect, useState } from "react"
import { Spiner } from "../spiner/spiner"

export const DeleteBookCard = ({ items, handleClick }) => {
    const [modal, setModal] = useState(false)
    const [loader, setLoader] = useState(false)

    const [book, setBook] = useState<IBook>()
    const [books, setBooks] = useState<IBook[]>(items)

    useEffect(() => {
        setBooks(items)
    }, [items])

    const handleSearch = (value) => {
        if (value.length === 0) return setBooks(items)
        setBooks(books => books.filter((book) =>
            book.name.toLowerCase().includes(value.toLowerCase())
        ))
    };

    const handleClickButton = (id) => {
        setLoader(true)

        setTimeout(() => {
            setLoader(false)
            handleClick(id)
            setModal(true)
        }, 1500)

        setTimeout(() => {
            setModal(false)
        }, 4000)
    }


    return <div className="shadow-md relative rounded-lg w-[400px] p-5">
        <input
            className="block mb-4 w-full rounded-lg shadow-md h-10 px-3"
            type="text"
            placeholder="Поиск книги"
            onChange={(e) => handleSearch(e.target.value)}
        />

        <ul className="h-[300px] flex flex-col shadow-md rounded-lg overflow-y-auto gap-3 px-3 py-4">
            {
                books.map(item => <li
                    onClick={() => setBook(item)}
                    key={item.id}
                    className={`flex border-[1px] border-solid p-3 rounded-md
                    ${book?.id === item.id ? "border-[#bb2649] border-[2px]" : "border-[#4f4f4f]"}`}
                >
                    {item.author}. {item.name}. {item.age}.
                </li>)
            }
        </ul>

        <button
            onClick={() => handleClickButton(book?.id)}
            className="flex mt-5 relative rounded-lg bg-[#bb2649] text-white fontm-medium items-center justify-center h-10 w-full"
        >
            {loader ? <Spiner /> : "Удалить книгу"}
        </button>

        <AccessModal
            open={modal}
            onClose={() => setModal(false)}
            title="Книга успешно удалена"
            text=""
        />
    </div>
}