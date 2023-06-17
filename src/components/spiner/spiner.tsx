import s from './spiner.module.scss'

export const Spiner = () => {

    return <div className={s.spiner}>
        <svg className={s.svg} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
            <circle cx="24" cy="4" r="4" fill="#a7a7a7" />
            <circle cx="12.19" cy="7.86" r="3.7" fill="#bdbdbd" />
            <circle cx="5.02" cy="17.68" r="3.4" fill="#ccc" />
            <circle cx="5.02" cy="30.32" r="3.1" fill="#d3d3d3" />
            <circle cx="12.19" cy="40.14" r="2.8" fill="#dadada" />
            <circle cx="24" cy="44" r="2.5" fill="#dddddd" />
            <circle cx="35.81" cy="40.14" r="2.2" fill="#e1e1e1" />
            <circle cx="42.98" cy="30.32" r="1.9" fill="#e2e2e3" />
            <circle cx="42.98" cy="17.68" r="1.6" fill="#e3e3e3" />
            <circle cx="35.81" cy="7.86" r="1.3" fill="#e4e4e4" />
        </svg>
    </div>
}