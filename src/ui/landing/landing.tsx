import Link from 'next/link';
import Socials from '../socials/socials';
import style from './landing.module.scss';

export default function Landing(){
    return(
        <section className={`${style['landing']}`}>
            <h1 className={`${style['landing__title']}`}>Hi, I&apos;m Dirk Brandon Lapitan</h1>
            <p className={`${style['landing__description']}`}>A passionate full-stack engineer specializing in developing and maintaining large-scale web applications. My dedication to continuous learning and growth drives my innovative solutions and commitment to excellence.</p>
            <Link className={`${style['landing__projects']}`} href={`#`}>Projects</Link>
            <Socials />
        </section>
    );
}