import s from './breadcrumbs.module.scss'
import { Crumb } from './crumb/crumb'

export const BreadCrumbs = ({ data }) => {

    return <div className={s.wrapper}>
        {data.map((crumb, idx) => (
            <Crumb {...crumb} key={idx} last={idx === data.length - 1} />
        ))}
    </div>
}