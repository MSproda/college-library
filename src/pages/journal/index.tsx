import { BookCard } from "@/components/book-card/book-card"
import { BreadCrumbs } from "@/components/breadcrumbs/breadcrumbs"
import { JournalCard } from "@/components/journal-card/journal-card"
import { PageLayout } from "@/containers/page-layout"
import { useAppSelector } from "@/core/store/store"
import { useEffect, useState } from "react"

const JournalPage = () => {
    const { items } = useAppSelector(state => state.journal)

    return <PageLayout>
        <div className="px-5 py-5">
            <BreadCrumbs data={
                [
                    { text: 'Главная', href: '/' },
                    { text: 'Журнал выдачи книг', },
                ]
            } />
        </div>
        <div>
            <ul className="gap-4 px-5 flex flex-wrap">
                {items.map(item => <JournalCard {...item} />)}
            </ul>
        </div>
    </PageLayout>
}

export default JournalPage
