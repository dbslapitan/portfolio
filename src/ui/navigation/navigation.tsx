'use client';

import { useContext, useEffect, useState } from 'react';
import style from './navigation.module.scss';
import Link from 'next/link';
import { NavContext } from '@/utils/provider';

export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false); 
    const { selected, setSelected } = useContext(NavContext);

    const clickHandler = (linkName: string) => {
        if(linkName !== selected){
            setSelected(linkName);
        }
        setIsOpen(!isOpen);
    }

    return(
        <div className={`${style['navigation']}`}>
            <button className={`${style['navigation__toggle']} ${isOpen ? style['navigation__toggle--open'] : style['navigation__toggle--close']}`} onClick={() => clickHandler(selected)}></button>
            <ul className={`${style['navigation__links']} ${ isOpen ? '' : style['navigation__links--hide']}`}>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']} ${selected === 'home' ? style['navigation__link--selected'] :  ''}`} href={`#home`} onClick={() => clickHandler("home")}>
                        Home
                    </Link>
                </li>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']} ${selected === 'about' ? style['navigation__link--selected'] :  ''}`} href={`#about`} onClick={() => clickHandler("about")}>
                        About
                    </Link>
                </li>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']} ${selected === 'projects' ? style['navigation__link--selected'] :  ''}`} href={`#projects`} onClick={() => clickHandler("projects")}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    );
}