import { JOURNAL_ROUTE, MANAGEMENT_ROUTE } from "@/core/utils/routes"
import Link from "next/link"

export const PageHeader = () => {

    return <header className="flex gap-x-8 p-5 border-b border-[#4f4f4f] border-solid">
        <div>
            <Link href="/" className="block font-medium text-lg mb-4">
                Управление библиотекой
            </Link>
            <ul>
                <Link href={MANAGEMENT_ROUTE} className="block text-white font-medium mb-3 p-2 bg-[#1983c9] rounded-md">
                    <button>Редактор книг</button>
                </Link>
                <Link href={JOURNAL_ROUTE} className="block text-white font-medium p-2 bg-[#1983c9] rounded-md">
                    <button>Журнал выдачи книг</button>
                </Link>
            </ul>
        </div>
        <div>
            <h2 className="font-medium text-lg mb-4">
                Выпускная квалификационная работа
            </h2>
            <ul>
                <li className="font-medium mb-2">студент 4 курса очной формы обучения</li>
                <li className="font-medium mb-2">специальность 09.02.05. Прикладная информатика (по отраслям)</li>
                <li className="font-medium mb-2">Мехтиев Мухамед Манасирович</li>
            </ul>
        </div>
    </header>
}