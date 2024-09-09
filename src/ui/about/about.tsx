'use client';

import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import style from './about.module.scss';
import { NavContext } from '@/utils/provider';
import { lockfilePatchPromise } from 'next/dist/build/swc';

export default function About(){

    const exposedTech = ['C#', 'JAVA', 'Python', 'Angular', 'AWS', 'Springboot', 'ASP.NET', 'PostgreSQL', 'OpenAI'];
    const elementRef = useRef<HTMLDivElement>(null);
    const { aboutTop } = useContext(NavContext);

    useEffect(() => {
        (aboutTop as MutableRefObject<number>).current = (elementRef.current as HTMLDivElement).getBoundingClientRect().top;
    }, [aboutTop]);

    return(
        <div id='about' className={`noise ${style['about']}`} ref={elementRef}>
            <section className={`${style['about__left']}`}>
                <h2 className={`${style['about__title']}`}>About Me</h2>
                <p className={`${style['about__paragraph']}`}>I am a passionate and dedicated software engineer whose journey began with a childhood fascination for dismantling gadgets and exploring computer systems. Over the years, I have transformed that early curiosity into a robust career in software development.</p>
                <p className={`${style['about__paragraph']}`}>My diverse experiences, from working as a night auditor to serving as a distribution assistant, have equipped me with exceptional problem-solving abilities and meticulous attention to detail. These roles have not only sharpened my technical skills but also instilled in me the value of organization and teamwork.</p>
                <p className={`${style['about__paragraph']}`}>I hold a Bachelor of Science in Computer Engineering, which has provided me with a solid understanding of OOP principles. Additionally, I earned a diploma in Software Engineering from Centennial College, where I was introduced to web development, sparking my passion for the field. My recent achievement from the BrainStation bootcamp has further solidified my foundation in web development.</p>
                <p className={`${style['about__paragraph']}`}>Currently, I am continuing to build my career in software development, always eager to tackle new challenges and contribute to innovative solutions. I believe that my combination of technical expertise, practical experience, and collaborative spirit makes me a valuable asset to any team. I am excited about the possibilities of connecting and working with professionals who share my passion for technology and innovation.</p>
            </section>

            <div className={`${style["about__right"]}`}>
                <section className={`${style['about__stack']}`}>
                    <h3 className={`${style['about__subtitle']}`}>Tech Stack:</h3>
                    <span className={`${style['about__tech']} ${style['about__tech--html']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--css']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--javascript']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--sass']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--node']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--typescript']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--mongodb']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--mysql']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--express']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--react']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--nextjs']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--git']}`}></span>
                    <span className={`${style['about__tech']} ${style['about__tech--auth0']}`}></span>
                </section>
                <section className={`${style['about__stack']}`}>
                    <h4 className={`${style['about__subtitle']} ${style['about__subtitle--small']}`}>Over the course of my education, I have been exposed to various technologies, and I am enthusiastic about revisiting them:</h4>
                    {
                        exposedTech.map(tech => {
                            return(
                                <span key={tech} className={`${style['about__expose']}`}>{tech}</span>
                            );
                        })
                    }
                </section>
            </div>
        </div>
    );
}