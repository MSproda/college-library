import s from './access-modal.module.scss'
import React, { FC } from "react"

export const AccessModal = ({ open, onClose, title, text }) => {

    return <div className={open ? `${s.active} ${s.wrapper}` : `${s.wrapper}`}>
        <div className={s.content}>
            <div className={s.img}>
                <img className='h-[60-px] w-[60px]' src="/access.svg" alt="icon" />
            </div>

            <h2 className={s.title}>{title}</h2>
            <h3 className={s.subTitle}>{text}</h3>
        </div>
    </div>
}
