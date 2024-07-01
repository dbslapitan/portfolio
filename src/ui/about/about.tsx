import style from './about.module.scss';

export default function About(){
    return(
        <section id='about' className={`${style['about']} noise`}>
            <h1>About</h1>
        </section>
    );
}