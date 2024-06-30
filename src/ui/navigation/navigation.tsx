'use client';

import { useState } from 'react';
import style from './navigation.module.scss';

export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false); 

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={`${style['navigation']}`}>
            <button className={`${style['navigation__toggle']} ${isOpen ? style['navigation__toggle--open'] : style['navigation__toggle--close']}`} onClick={clickHandler}></button>
        </div>
    );
}