import style from './socials.module.scss';

export default function Socials(){
    return(
        <div className={`${style['socials']}`}>
            <a className={`${style['socials__link']} ${style['socials--linkedin']}`} href="https://www.linkedin.com/in/dbslapitan/" target='_blank'></a>
            <a className={`${style['socials__link']} ${style['socials--github']}`} href="https://github.com/dbslapitan" target='_blank'></a>
        </div>
    );
}