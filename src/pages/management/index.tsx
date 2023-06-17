import { BreadCrumbs } from "@/components/breadcrumbs/breadcrumbs"
import { CreateBookCard } from "@/components/create-book-card/create-book-card"
import { DeleteBookCard } from "@/components/delete-book-card/delete-book-card"
import { PageLayout } from "@/containers/page-layout"
import { setCreateBooks, setDeleteBooks } from "@/core/store/slices/books.slice"
import { useAppDispatch, useAppSelector } from "@/core/store/store"

const ManagementPage = () => {
    const { items } = useAppSelector(state => state.books)
    const dispatch = useAppDispatch()

    const handleCreateBook = (data) => {
        dispatch(setCreateBooks(data))
    }

    const handleDeleteBook = (id) => {
        dispatch(setDeleteBooks(id))
    }

    return <PageLayout>

        <div className="px-5 py-5">
            <BreadCrumbs data={
                [
                    { text: 'Главная', href: '/' },
                    { text: 'Редактор книг', },
                ]
            } />
        </div>

        <div className="p-5 flex items-stretch gap-x-8">
            <CreateBookCard id={items.length + 1} handleClick={handleCreateBook} />
            <DeleteBookCard items={items} handleClick={handleDeleteBook} />
        </div>
    </PageLayout>
}

export default ManagementPage
