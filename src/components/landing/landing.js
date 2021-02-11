import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from './pixelAvatar.png'
import './landing.css';
export function Main(){
    return(
        <div className="main-container">
            <header className="header-container">
                <div className="left-column">
                    <h1><span className="arcade-font">Hello!</span> <br /> I'm Sebastian Montagna</h1>
                    <h3>And I am looking for my first IT Job. <br />Developer by vocation, accountant by profession, gamer by passion.</h3>
                    <p><small>Got any opportunity? I'm looking forward to your <Link to="/">Contact</Link>.</small></p>
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
                    <p>the more saturated the better . <small><em>*according to my subjectivity</em>    </small>  </p>
                    <div>
                    <div id="teamwork-icon"><i class="fas fa-users" ></i><span> Teamwork</span></div>
                        
                    <div id="css-icon"><i class="devicon-css3-plain" ></i><span> css</span></div>
                        <div id="html-icon"><i class="devicon-html5-plain" ></i><span> html</span></div>
                        <div id="django-icon"><i class="devicon-django-plain" ></i><span> django</span></div>
                        <div id="react-icon"><i class="devicon-react-original" ></i><span> react</span> </div>
                        <div id="git-icon"><i class="devicon-git-plain" ></i><span>  git</span></div>
                        <div id="communication-icon"><i class="far fa-comment" ></i><span> Communication</span> </div>
                        <div id="bootstrap-icon"><i class="devicon-bootstrap-plain" ></i><span> bootstrap</span></div>
                        <div id="coffee-icon"><i class="fas fa-coffee" ></i><span> Coffee drinker</span></div>
                    </div>

                </div>
                <div className="projects">
                    <h3 className="arcade-font">Projects</h3>
                    <h5 className="arcade-font"><Link to="/projects">Press Start Button <small>(Click here)</small></Link></h5>
                </div>
            </section>
            <footer className="footer-container">
                
            </footer>
        </div>
    )
}