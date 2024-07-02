'use client';

import { useEffect, useState } from 'react';
import style from './navigation.module.scss';
import Link from 'next/link';

export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false); 

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={`${style['navigation']}`}>
            <button className={`${style['navigation__toggle']} ${isOpen ? style['navigation__toggle--open'] : style['navigation__toggle--close']}`} onClick={clickHandler}></button>
            <ul className={`${style['navigation__links']} ${ isOpen ? '' : style['navigation__links--hide']}`}>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']}`} href={`#home`} onClick={clickHandler}>
                        Home
                    </Link>
                </li>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']}`} href={`#about`} onClick={clickHandler}>
                        About
                    </Link>
                </li>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']}`} href={`#projects`} onClick={clickHandler}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    );
}