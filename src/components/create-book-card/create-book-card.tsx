import { AccessModal } from "@/modals/access-modal/access-modal"
import { useState } from "react"
import { Spiner } from "../spiner/spiner"

export const CreateBookCard = ({ handleClick, id }) => {
    const [modal, setModal] = useState(false)
    const [loader, setLoader] = useState(false)

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [age, setAge] = useState('')
    const [quantity, setQuantity] = useState('')

    const data = {
        id: id,
        name: name,
        author: author,
        age: age,
        quantity: quantity
    }

    const handleClickButton = () => {
        setLoader(true)

        setTimeout(() => {
            setLoader(false)
            handleClick(data)
            setModal(true)
        }, 1500)

        setTimeout(() => {
            setModal(false)
        }, 4000)
    }

    return <div className="shadow-md relative overflow-hidden rounded-lg w-[400px] p-5 flex flex-col">
        <h3 className="font-medium text-md mb-5">
            Чтобы добавить книгу введите автора, название книги,
            год выпуска и количество экземпляров, а затем нажмите кнопку добавить книгу.
        </h3>
        <input
            className="block mb-4 w-full rounded-lg shadow-md h-12 px-3"
            type="text"
            placeholder="Название книги"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input
            className="block mb-4 w-full rounded-lg shadow-md h-12 px-3"
            type="text"
            placeholder="Автор книги"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />

        <input
            className="block mb-4 w-full rounded-lg shadow-md h-12 px-3"
            type="text"
            placeholder="Год издательства"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />

        <input
            className="block mb-full w-full rounded-lg shadow-md h-12 px-3"
            type="text"
            placeholder="Количество экземпляров"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
        />

        <div className="flex-auto flex items-end">
            <button
                onClick={handleClickButton}
                className="flex mt-5 relative rounded-lg bg-[#bb2649] text-white fontm-medium items-center justify-center h-10 w-full"
            >
                {loader ? <Spiner /> : "Добавить книгу"}
            </button>
        </div>

        <AccessModal
            open={modal}
            onClose={() => setModal(false)}
            title="Книга успешно добавлена"
            text="Теперь она находится в каталоге"
        />
    </div>
}