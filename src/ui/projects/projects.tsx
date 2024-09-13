'use client';

import style from './projects.module.scss';
import kanban from '../../../public/images/kanban.png';
import nomi from '../../../public/images/nomi.gif';
import profeng from '../../../public/images/profeng.png';
import Image from 'next/image';
import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { NavContext } from '@/utils/provider';

export default function Projects() {

    const kanbanStack = ['React', 'TypeScript', 'NodeJS', 'Express', 'MongoDB', 'NextJS', 'Auth0'];
    const nomiStack = ['React', 'Javascript', 'NodeJS', 'Express', 'MySQL'];
    const profengStack = ['React', 'TypeScript', 'NodeJS', 'Express', 'MongoDB', 'NextJS', 'OpenAI'];
    const elementRef = useRef<HTMLElement>(null);
    const { projectsTop } = useContext(NavContext);

    useEffect(() => {
        (projectsTop as MutableRefObject<number>).current = (elementRef.current as HTMLDivElement).getBoundingClientRect().top + window.scrollY;

        const resizeListener = (e: Event) => {
            (projectsTop as MutableRefObject<number>).current = (elementRef.current as HTMLDivElement).getBoundingClientRect().top + window.scrollY;
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [projectsTop]);

    return (
        <section id='projects' className={`${style['projects']}`} ref={elementRef}>
            <h2 className={`${style['projects__header']}`}>Projects</h2>
            <section className={`${style['project']}`}>
                <h3 className={`${style['project__title']}`}>Kanban</h3>
                <div className={`${style['project__left']}`}>
                    <Image className={`${style['project__image']}`} src={kanban} alt="Kanban homepage screenshot" priority />
                </div>
                <div className={`${style['project__right']}`}>
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
            <section className={`${style['project']}`}>
                <h3 className={`${style['project__title']}`}>NOMI</h3>
                <div className={`${style['project__left']}`}>
                    <Image className={`${style['project__image']} noise`} src={nomi} alt="NOMI gif" priority />
                </div>
                <div className={`${style['project__right']}`}>
                    <p className={`${style['project__description']}`}>BrainStation's industry project with Shopify: Collaborated with UX/UI designers, data scientists, and cybersecurity experts to develop a menu-based chatbot that supports merchants in streamlining product return processes, enhancing customer satisfaction.</p>
                    <div className={`${style['project__stack']}`}>
                        {
                            nomiStack.map(tech => {
                                return (
                                    <span key={tech} className={`${style['project__tech']}`}>
                                        {tech}
                                    </span>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            <section className={`${style['project']}`}>
                <h3 className={`${style['project__title']}`}>ProfEng</h3>
                <div className={`${style['project__left']}`}>
                    <Image className={`${style['project__image']} noise`} src={profeng} alt="ProfEng" priority />
                </div>
                <div className={`${style['project__right']}`}>
                    <p className={`${style['project__description']}`}>A full-stack web application designed to enhance users&apos; English communication skills—reading and writing—by utilizing OpenAI for essay feedback.</p>
                    <div className={`${style['project__stack']}`}>
                        {
                            profengStack.map(tech => {
                                return (
                                    <span key={tech} className={`${style['project__tech']}`}>
                                        {tech}
                                    </span>
                                );
                            })
                        }
                    </div>
                    <div className={`${style['project__repositories']}`}>
                        <a className={`${style['project__link']} ${style['project__repository']}`} href='https://github.com/dbslapitan/profeng-front' target='_blank'>Frontend Repository</a>
                        <a className={`${style['project__link']} ${style['project__repository']}`} href='https://github.com/dbslapitan/profeng-back' target='_blank'>Backend Repository</a>
                    </div>
                </div>
            </section>
        </section>
    );
}