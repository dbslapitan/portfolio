import style from './landing.module.scss';

export default function Landing(){
    return(
        <section className={`${style['landing']}`}>
            <h1 className={`${style['landing__title']}`}>Hi, I'm Dirk Brandon Lapitan</h1>
        </section>
    );
}