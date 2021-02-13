import React from 'react';
import { useScrollData } from "scroll-data-hook";

//Required for framer-motion
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../pageTransition/pageTransition';
import {Link} from 'react-router-dom';
import Avatar from './pixelAvatar2.png'
import './landing.css';
export function Main(props){
    const {position} = useScrollData();

    return(
        <motion.div className="main-container" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            

            <header className="header-container">
                <div className="left-column">
                    <h1><span className="arcade-font">{props.english ? "Hello!" : "Hola!"}</span> <br />{props.english ? "I'm Sebastian Montagna" : "Soy Sebastian Montagna"} </h1>
                    <h3>{props.english ? "And I am looking for my" : "Y estoy buscando mi"} <u>{props.english ? "first IT Job" : "primer trabajo IT"}</u>. <br />{props.english ? "Developer by election, accountant by profession, gamer just because." : "Desarrollador por elección, contador por profesión, gamer porque si."}</h3>
                    <p><small>{props.english ? "Got any opportunity? I'm looking forward to your" : "Tenés alguna oportunidad para mi? Me gustaría recibir tu"} <Link to="/contact"><b>{props.english ? "Contact" : "Contacto"}</b></Link>.</small></p>
                </div>
                <div className="right-column">
                    <img className="header-avatar" src={Avatar} />
                </div>
            </header>
            <svg id="arrow-down" width="78" height="33" viewBox="0 0 78 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:`${position.y > 400 ? "0" : "1"}`}}>
                <path d="M39 33L0.0288572 0.75L77.9711 0.750007L39 33Z" fill="#80567C"/>
            </svg>
            <section className="skills-container">
                <div className="about-me">
                    <h3 className="arcade-font">{props.english ? "About me" : "Sobre mi"}</h3>
                    <p>{props.english ? "I was born in 1993 in Salta-Argentina, where I'm currently living. Went to college after school to get my Accountant degree in 2017. But after working a few years with taxes and other boring stuff, I've finally decided to take a step towards my dream to become a Developer." : "Nací en 1993 en Salta, Argentina, donde aún vivo. Fuí a la universidad despues del colegio para obtener mi título de Contador en el 2017. Pero después de varios años trabajando con impuestos y otras cosas aburridas, finalmente decidí dar el paso en dirección a mi sueño de convertirme en Desarrollador."}</p><br />
                    <p>{props.english ? "In 2018 started my journey through multiple courses, tutorials, different programming languages. Jumping from Sofwared Dev, to Web Dev, to Game Dev, to Data Science and so on. I can't say I regret it, 'cause it helped me a lot to understand the fundamentals of programming and made me realize that Web Development was the final path for me. Well, and some Game Development but as a hobby." : "En el 2018 empezo mi expedición entre un montón de cursos, tutoriales, diferentes lenguajes de programación. Pase del Desarrollo de software de escritorio, a aplicaciones web, a desarrollo de juegos, a data science, y así. No puedo decir que me arrepienta porque me ayudó un montón a entender los fundamentos de la programación y me permitió darme cuenta de que el Desarrollo Web era el indicado para mi. Bueno, y un poco de desarrollo de Videojuegos, pero como hobby."}</p> <br />
                    <p>{props.english ? "Then 2020 had arrived and everything changed. As many others, the pandemic kinda ruined my plans, so I was there, without an accounting job and with a lot of free time. 'Things happen for a reason'. I've heard that a lot, and I have finally understood it. Since then free-time, for me, became a synonym of an opportunity to study." : "Y el 2020 llegó y todo cambió. Como a muchos otros, la pandemia me arruinó los planes. Asi que ahí estuve, sin trabajo de Contador y con un monton de tiempo libre. \"Las cosas pasan por algo\". Escuché eso tantas veces, y ahora lo entiendo. Desde entonces, para mí, el tiempo libre se volvio una oportunidad de seguir estudiando."}</p><br />
                    <p>{props.english ? "Python was love at first sight. So was Django for developing Web apps. But React appeared in my life and it was so amazing that let me no other choice than pick it for Front-end. Willing to learn new things tho." : "Python fue amor a primera vista. También lo fue Django para el desarrollo de Web Apps. Y después apareció React que me pareció tan bueno que no me quedo otra que adoptarlo para el Front-End. Igual estoy dispuesto a aprender otras cosas."}</p>
                </div>
                
                <div className="skills">
                    <h3 className="arcade-font">{props.english ? "Skills" : "Habilidades"}</h3>
                    <p>{props.english ? "the more opaque the better." : "mientras más opaco mejor."} <small><em>{props.english ? "*according to my subjectivity" : "*según mi subjetividad"}</em>    </small>  </p>
                    <div>
                        <div id="communication-icon"><i className="far fa-comment" ></i><span> {props.english ? "Communication" : "Comunicación"}</span> </div>
                        <div id="english-icon"><i className="fas fa-globe-americas"></i><span>{props.english ? "English" : "Inglés"}</span>   </div>
                        <div id="teamwork-icon"><i className="fas fa-users" ></i><span> Teamwork</span></div>
                        <div id="css-icon"><i className="devicon-css3-plain" ></i><span> CSS</span></div>
                        <div id="html-icon"><i className="devicon-html5-plain" ></i><span> HTML</span></div>
                        <div id="bootstrap-icon"><i className="devicon-bootstrap-plain" ></i><span> Bootstrap</span></div>
                        <div id="django-icon"><i className="devicon-django-plain" ></i><span> Django</span></div>
                        <div id="react-icon"><i className="devicon-react-original" ></i><span> React</span> </div>
                        <div id="git-icon"><i className="devicon-git-plain" ></i><span>  git</span></div>
                        <div id="gamedev-icon"><i className="fas fa-gamepad"></i><span>Game Dev</span>   </div>
                        <div id="coffee-icon"><i className="fas fa-coffee" ></i><span><span className="tachado">{props.english ? "Coffee" : "Café"}</span> {props.english ? "Tea" : "Té"}</span></div>
                        <div id="uxui-icon"><i className="devicon-sketch-line"></i><span>UX/UI</span>   </div>
                    </div>

                </div>
                <div className="projects">
                    <h3 className="arcade-font">{props.english ? "Projects" : "Proyectos"}</h3>
                    <h5 className="arcade-font"><Link to="/projects">Press Start Button <small>{props.english ? "(Click Here)" : "(Click Aqui)"}</small></Link></h5>
                </div>
            </section>
            
        </motion.div>
    )
}