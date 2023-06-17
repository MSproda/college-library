import Link from 'next/link'
import s from './crumb.module.scss'

export const Crumb = ({ text, href, last = false }) => {

    if (last) {
        return <a className={s.link}>{text}</a>
    }

    return <Link className={s.link} href={href}>
        {text}
    </Link>
}