import React from 'react';
import s from './TextWithIcon.module.scss';

const TextWithIcon = ({ text, icon, color }) => {
    return (
        <div className={s["text-with-icon"]}>
            {
                color 
                ? 
                <span className={s['text-with-icon__icon'] + ' ' + s['_circle']} style={{background: color}}>{icon}</span> 
                : 
                <span className={s["text-with-icon__icon"]}>{icon}</span>
            }
            <span>{text}</span>
        </div>
    )
}

export default TextWithIcon;