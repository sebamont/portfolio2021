import React from 'react';
import { useScrollData } from "scroll-data-hook";
import {Link} from 'react-router-dom';
import Avatar from './pixelAvatar2.png'
import './landing.css';
export function Main(){
    const {position} = useScrollData();

    return(
        <div className="main-container" >
            <svg id="arrow-down" width="78" height="33" viewBox="0 0 78 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:`${position.y > 100 ? "0" : "1"}`}}>
                <path d="M39 33L0.0288572 0.75L77.9711 0.750007L39 33Z" fill="#80567C"/>
            </svg>

            <header className="header-container">
                <div className="left-column">
                    <h1><span className="arcade-font">Hello!</span> <br /> I'm Sebastian Montagna</h1>
                    <h3>And I am looking for my <u>first IT Job</u>. <br />Developer by vocation, accountant by profession, gamer by passion.</h3>
                    <p><small>Got any opportunity? I'm looking forward to your <Link to="/"><b>Contact</b></Link>.</small></p>
                </div>
                <div className="right-column">
                    <img className="header-avatar" src={Avatar} />
                </div>
            </header>
            <section className="skills-container">
                <div className="about-me">
                    <h3 className="arcade-font">About me</h3>
                    <p>I was born in 1993 in Salta-Argentina, where I'm currently living. Went to college after school to get my Accountant degree in 2017. But after working a few years with taxes and other boring stuff, I've finally decided to take a step towards my dream to become a Developer.</p><br />
                    <p>In 2018 started my journey through multiple courses, tutorials, different programming languages. Jumping from Sofwared Dev, to Web Dev, to Game Dev, to Data Science and so on. I can't say I regret it, 'cause it helped me a lot to understand the fundamentals of programming and made me realize that Web Development was the final path for me. Well, and some Game Development but as a hobby.</p> <br />
                    <p>Then 2020 had arrived and everything changed. As many others, the pandemic kinda ruined my plans, so I was there, without an accounting job and with a lot of free time. "Things happen for a reason". I've heard that a lot, and I have finally understood it. Since then free-time, for me, became a synonym of keep studying.</p><br />
                    <p>Python was love at first sight. So was Django for developing Web apps. But React appeared in my life and it was so amazing that let me no other choice than pick it for Front-end. Willing to learn new things tho.</p>
                </div>
                
                <div className="skills">
                    <h3 className="arcade-font">Skills</h3>
                    <p>the more opaque the better . <small><em>*according to my subjectivity</em>    </small>  </p>
                    <div>
                        <div id="communication-icon"><i className="far fa-comment" ></i><span> Communication</span> </div>
                        <div id="english-icon"><i className="fas fa-globe-americas"></i><span>English</span>   </div>
                        <div id="teamwork-icon"><i className="fas fa-users" ></i><span> Teamwork</span></div>
                        <div id="css-icon"><i className="devicon-css3-plain" ></i><span> CSS</span></div>
                        <div id="html-icon"><i className="devicon-html5-plain" ></i><span> HTML</span></div>
                        <div id="bootstrap-icon"><i className="devicon-bootstrap-plain" ></i><span> Bootstrap</span></div>
                        <div id="django-icon"><i className="devicon-django-plain" ></i><span> Django</span></div>
                        <div id="react-icon"><i className="devicon-react-original" ></i><span> React</span> </div>
                        <div id="git-icon"><i className="devicon-git-plain" ></i><span>  git</span></div>
                        <div id="gamedev-icon"><i className="fas fa-gamepad"></i><span>Game Dev</span>   </div>
                        <div id="coffee-icon"><i className="fas fa-coffee" ></i><span> Coffee drinker</span></div>
                        <div id="uxui-icon"><i class="devicon-sketch-line"></i><span>UX/UI</span>   </div>
                    </div>

                </div>
                <div className="projects">
                    <h3 className="arcade-font">Projects</h3>
                    <h5 className="arcade-font"><Link to="/projects">Press Start Button <small>(Click here)</small></Link></h5>
                </div>
            </section>
        </div>
    )
}