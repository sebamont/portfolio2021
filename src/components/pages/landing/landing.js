import React, {useContext} from 'react';
import { useScrollData } from "scroll-data-hook";

//Contexts
import {GlobalContext} from '../../../context/GlobalContext';

//Required for framer-motion
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../pageTransition/pageTransition';
import {Link} from 'react-router-dom';
import Avatar from './pixelAvatar2.png'
import './landing.css';
export function Main(){
    const {position} = useScrollData();
    const {english} = useContext(GlobalContext);

    return(
        <motion.div className="main-container" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            

            <header className="header-container">
                <div className="left-column">
                    <h1><span className="arcade-font">{english ? "Hello!" : "Hola!"}</span> <br />{english ? "I'm Sebastian Montagna" : "Soy Sebastian Montagna"} </h1>
                    <h3>{english ? "And I am looking for my" : "Y estoy buscando mi"} <u>{english ? "first IT Job" : "primer trabajo IT"}</u>. <br />{english ? "Developer by election, accountant by profession, gamer just because." : "Desarrollador por elección, contador por profesión, gamer porque si."}</h3>
                    <p><small>{english ? "Got any opportunity? I'm looking forward to your" : "Tenés alguna oportunidad para mi? Me gustaría recibir tu"} <Link to="/contact"><b>{english ? "Contact" : "Contacto"}</b></Link>.</small></p>
                </div>
                <div className="right-column">
                    <img className="header-avatar" src={Avatar} alt="Pixelated Sebastian Montagna"/>
                </div>
            </header>
            <svg id="arrow-down" alt="Purple down indicator" width="78" height="33" viewBox="0 0 78 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:`${position.y > 400 ? "0" : "1"}`}}>
                <path d="M39 33L0.0288572 0.75L77.9711 0.750007L39 33Z" fill="#80567C"/>
            </svg>
            <section className="skills-container">
                <div className="about-me">
                    <h3 className="arcade-font">{english ? "About me" : "Sobre mi"}</h3>
                    <p>{english ? "I was born in 1993 in Salta-Argentina, where I'm currently living. Went to college after school to get my Accountant degree in 2017. But after working a few years with taxes and other boring stuff, I've finally decided to take a step towards my dream to become a Developer." : "Nací en 1993 en Salta, Argentina, donde aún vivo. Fuí a la universidad despues del colegio para obtener mi título de Contador en el 2017. Pero después de varios años trabajando con impuestos y otras cosas aburridas, finalmente decidí dar el paso en dirección a mi sueño de convertirme en Desarrollador."}</p><br />
                    <p>{english ? "In 2018 started my journey through multiple courses, tutorials, different programming languages. Jumping from Sofwared Dev, to Web Dev, to Game Dev, to Data Science and so on. I can't say I regret it, 'cause it helped me a lot to understand the fundamentals of programming and made me realize that Web Development was the final path for me. Well, and some Game Development but as a hobby." : "En el 2018 empezo mi expedición entre un montón de cursos, tutoriales, diferentes lenguajes de programación. Pase del Desarrollo de software de escritorio, a aplicaciones web, a desarrollo de juegos, a data science, y así. No puedo decir que me arrepienta porque me ayudó un montón a entender los fundamentos de la programación y me permitió darme cuenta de que el Desarrollo Web era el indicado para mi. Bueno, y un poco de desarrollo de Videojuegos, pero como hobby."}</p> <br />
                    <p>{english ? "Then 2020 had arrived and everything changed. As many others, the pandemic kinda ruined my plans, so I was there, without an accounting job and with a lot of free time. 'Things happen for a reason'. I've heard that a lot, and I have finally understood it. Since then free-time, for me, became a synonym of an opportunity to study." : "Y el 2020 llegó y todo cambió. Como a muchos otros, la pandemia me arruinó los planes. Asi que ahí estuve, sin trabajo de Contador y con un monton de tiempo libre. \"Las cosas pasan por algo\". Escuché eso tantas veces, y ahora lo entiendo. Desde entonces, para mí, el tiempo libre se volvio una oportunidad de seguir estudiando."}</p><br />
                    <p>{english ? "Python was love at first sight. So was Django for developing Web apps. But React appeared in my life and it was so amazing that let me no other choice than pick it for Front-end. Willing to learn new things tho." : "Python fue amor a primera vista. También lo fue Django para el desarrollo de Web Apps. Y después apareció React que me pareció tan bueno que no me quedo otra que adoptarlo para el Front-End. Igual estoy dispuesto a aprender otras cosas."}</p>
                </div>
                
                <div className="skills">
                    <h3 className="arcade-font">{english ? "Skills" : "Habilidades"}</h3>
                    <p>{english ? "the more opaque the better." : "mientras más opaco mejor."} <small><em>{english ? "*according to my subjectivity" : "*según mi subjetividad"}</em>    </small>  </p>
                    <div>
                        <SkillCard divId="communication-icon" iconClasses="far fa-comment" skillName={english ? "Communication" : "Comunicación"} />
                        <SkillCard divId="english-icon" iconClasses="fas fa-globe-americas" skillName={english ? "English" : "Inglés"} />
                        <SkillCard divId="teamwork-icon" iconClasses="fas fa-users" skillName="Teamwork" />
                        <SkillCard divId="css-icon" iconClasses="devicon-css3-plain" skillName="CSS" />
                        <SkillCard divId="html-icon" iconClasses="devicon-html5-plain" skillName="HTML" />
                        <SkillCard divId="react-icon" iconClasses="devicon-react-original" skillName="React" />
                        <SkillCard divId="bootstrap-icon" iconClasses="devicon-bootstrap-plain" skillName="Bootstrap" />
                        <SkillCard divId="django-icon" iconClasses="devicon-django-plain" skillName="Django" />
                        <SkillCard divId="git-icon" iconClasses="devicon-git-plain" skillName="git" />
                        <SkillCard divId="gamedev-icon" iconClasses="fas fa-gamepad" skillName="Game Dev" />
                        <SkillCard divId="coffee-icon" iconClasses="fas fa-coffee" skillName="" >
                            <span><span className="tachado">{english ? "Coffee" : "Café"}</span> {english ? "Tea" : "Té"}</span>
                        </SkillCard>
                        <SkillCard divId="uxui-icon" iconClasses="fas fa-users" skillName="UX/UI" />
                    </div>

                </div>
                <div className="projects">
                    <h3 className="arcade-font">{english ? "Projects" : "Proyectos"}</h3>
                    <h5 className="arcade-font"><Link to="/projects">Press Start Button <small>{english ? "(Click Here)" : "(Click Aqui)"}</small></Link></h5>
                </div>
            </section>
            
        </motion.div>
    )
}


//position.y > 9000 ? props.divID will asign the id to the card so it will run the animation once we scrolled down 1000px (will show the animation perfectly on desktop)
//TODO: how to make that for mobile?
function SkillCard(props){
    const {position} = useScrollData();
    return(
        <div id={position.y>900? props.divId : ""}> 
            <i className={props.iconClasses}></i> 
            <span>{props.skillName}</span>
            {props.children}
        </div>
    )
}