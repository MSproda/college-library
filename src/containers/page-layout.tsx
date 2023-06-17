import { PageHeader } from "@/components/page-header/page-header"

export const PageLayout = ({ children }) => {

    return <>
        <PageHeader />
        <main>
            {children}
        </main>
    </>
}