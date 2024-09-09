'use client';

import style from './projects.module.scss';
import kanban from '../../../public/images/kanban.png';
import Image from 'next/image'
import Link from 'next/link';
import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { NavContext } from '@/utils/provider';

export default function Projects() {

    const kanbanStack = ['React', 'TypeScript', 'NodeJS', 'Express', 'MongoDB', 'NextJS', 'Auth0'];
    const elementRef = useRef<HTMLElement>(null);
    const { projectsTop } = useContext(NavContext);

    useEffect(() => {
        (projectsTop as MutableRefObject<number>).current = (elementRef.current as HTMLDivElement).getBoundingClientRect().top;
    }, [projectsTop]);

    return (
        <section id='projects' className={`${style['projects']}`} ref={elementRef}>
            <h2 className={`${style['projects__header']}`}>Projects</h2>
            <section className={`${style['project']}`}>
                <h3 className={`${style['project__title']}`}>Kanban</h3>
                <div className={`${style['project__left']}`}>
                    <Image className={`${style['project__image']}`} src={kanban} alt="Kanban homepage screenshot" priority />
                </div>
                <div>
                    <p className={`${style['project__description']}`}>A task management app with a light/dark mode toggle, integrated authentication, added functionality for board editors, and implemented drag-and-drop functionality.</p>
                    <div className={`${style['project__stack']}`}>
                        {
                            kanbanStack.map(tech => {
                                return (
                                    <span key={tech} className={`${style['project__tech']}`}>
                                        {tech}
                                    </span>
                                );
                            })
                        }
                    </div>
                    <a className={`${style['project__link']}`} href='https://kanban.dblapitan.dev' target='_blank'>Preview Site</a>
                </div>
            </section>
        </section>
    );
}