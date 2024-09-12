'use client';

import { MouseEvent, MutableRefObject, useContext, useEffect, useState } from 'react';
import style from './navigation.module.scss';
import Link from 'next/link';
import { NavContext } from '@/utils/provider';
import { useRouter } from 'next/navigation';

export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false); 
    const { selected, setSelected, projectsTop, aboutTop } = useContext(NavContext);
    const [isMounted, setIsMounted] = useState(false);

    const clickHandler = (event: MouseEvent, linkName: string) => {
        event.preventDefault();
        if(linkName === 'home'){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        else if(linkName === "about"){
            window.scrollTo({
                top: (aboutTop as MutableRefObject<number>).current,
                behavior: 'smooth'
            });
        }
        else{
            window.scrollTo({
                top: (projectsTop as MutableRefObject<number>).current,
                behavior: 'smooth'
            });
        }
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsMounted(true);
        const calculateSelected = () => {
            const aboutPoint = (aboutTop as MutableRefObject<number>).current;
            const projectsPoint = (projectsTop as MutableRefObject<number>).current;
            const screenHeight = window.innerHeight;
            const threshold = Math.floor(screenHeight * 0.5);
            if(window.scrollY >= 0 && window.scrollY <= (aboutPoint - threshold)){
                setSelected('home');
            }
            else if((window.scrollY > (aboutPoint - threshold)) && (window.scrollY <= (projectsPoint - threshold))){
                setSelected('about');
            }
            else{
                setSelected('projects');
            }
        };
        
        calculateSelected();

        if(isMounted){
            document.addEventListener('scroll', () => {
                calculateSelected();
            })
        }
    }, [projectsTop, setSelected, isMounted, aboutTop]);

    return(
        <div className={`${style['navigation']}`}>
            <button className={`${style['navigation__toggle']} ${isOpen ? style['navigation__toggle--open'] : style['navigation__toggle--close']}`} onClick={(event: MouseEvent) => clickHandler(event, selected)}></button>
            <ul className={`${style['navigation__links']} ${ isOpen ? '' : style['navigation__links--hide']}`}>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']} ${selected === 'home' ? style['navigation__link--selected'] :  ''}`} href={`#home`} onClick={(event: MouseEvent) => clickHandler(event, 'home')}>
                        Home
                    </Link>
                </li>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']} ${selected === 'about' ? style['navigation__link--selected'] :  ''}`} href={`#about`} onClick={(event: MouseEvent) => clickHandler(event, 'about')}>
                        About
                    </Link>
                </li>
                <li className={`${style['navigation__item']}`}>
                    <Link className={`${style['navigation__link']} ${selected === 'projects' ? style['navigation__link--selected'] :  ''}`} href={`#projects`} onClick={(event: MouseEvent) => clickHandler(event, 'projects')}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    );
}