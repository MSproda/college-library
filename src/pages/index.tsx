import { BookCard } from "@/components/book-card/book-card"
import { PageLayout } from "@/containers/page-layout"
import { IBook } from "@/core/models/book.model"
import { useAppSelector } from "@/core/store/store"
import { MANAGEMENT_ROUTE } from "@/core/utils/routes"
import Link from "next/link"
import { useEffect, useState } from "react"

const HomePage = () => {
  const { items } = useAppSelector(state => state.books)
  const [books, setBooks] = useState<IBook[]>([])
  const [search, setSearch] = useState('')

  const handleSearch = (value) => {
    setBooks(books => books.filter((book) =>
      book.name.toLowerCase().includes(value.toLowerCase())
    ))
  };

  useEffect(() => {
    if (search.length > 0) {
      setBooks(items)
      handleSearch(search)
    } else {
      setBooks([])
    }
  }, [search])

  const style = books.length > 0 ? `visible opacity-1` : `invisible opacity-0`

  return <PageLayout>
    <div className="p-5 flex justify-center">
      {items.length ? <div className="w-full p-5 max-w-[800px] bg-white h-[500px] rounded-lg shadow-md overflow-y-scroll">

        <div className="w-full relative h-[50px] mb-5 bg-[#f1f1f1] rounded-lg">
          <input
            className="w-full bg-transparent h-full px-4"
            type="text"
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={`absolute top-[60px] rounded-lg left-0 w-full h-[430px] bg-[#bb2649] p-5 oveflow-y-scroll
  ${style}`}>
            <ul className="gap-4 flex flex-col">
              {books.map(item => <BookCard key={item.id} {...item} />)}
            </ul>
          </div>
        </div>

        <ul className="gap-4 flex flex-col">
          {items.map(item => <BookCard key={item.id} {...item} />)}
        </ul>
      </div>
        : <div className="font-medium">Добавьте книгу в каталог, <Link href={MANAGEMENT_ROUTE}>
          <span className="underline color-[blue]">
            перейдите по ссылке
          </span>
        </Link>
        </div>
      }
    </div>
  </PageLayout>
}

export default HomePage
