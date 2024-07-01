import style from './about.module.scss';

export default function About(){
    return(
        <div id='about' className={`${style['about']} noise`}>
            <div className={`${style['about-container']}`}>
                <section className={`${style['about__left']}`}>
                    <h2>About Me</h2>
                    <p>I am a passionate and dedicated software engineer whose journey began with a childhood fascination for dismantling gadgets and exploring computer systems. Over the years, I have transformed that early curiosity into a robust career in software development.</p>
                    <p>My diverse experiences, from working as a night auditor to serving as a distribution assistant, have equipped me with exceptional problem-solving abilities and meticulous attention to detail. These roles have not only sharpened my technical skills but also instilled in me the value of organization and teamwork.</p>
                    <p>I hold a Bachelor of Science in Computer Engineering, which has provided me with a solid understanding of OOP principles. Additionally, I earned a diploma in Software Engineering from Centennial College, where I was introduced to web development, sparking my passion for the field. My recent achievement from the BrainStation bootcamp has further solidified my foundation in web development.</p>
                    <p>Currently, I am continuing to build my career in software development, always eager to tackle new challenges and contribute to innovative solutions. I believe that my combination of technical expertise, practical experience, and collaborative spirit makes me a valuable asset to any team. I am excited about the possibilities of connecting and working with professionals who share my passion for technology and innovation.</p>
                </section>
                <div className={`${style['about__right']}`}>

                </div>
            </div>
        </div>
    );
}