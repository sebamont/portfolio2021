import React from 'react';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../../pageTransition/pageTransition';
import './monitor.css';

//Project components
import {SvgLogo} from '../projects/svgAnimations/svgLogo';
import {ResponsiveWeb} from '../projects/responsiveWeb/responsiveWeb';
import {DjangoBlog} from '../projects/djangoBlog/djangoBlog';
import {UnityHobby} from '../projects/unityHobby/unityHobby';
import {APIRest} from '../projects/apiRest/apiRest';

export function Monitor (props){
    const projects = [
        {
            title : props.english ? "Consuming Twitch Rest APIs with React" : "Usando Rest APIs de Twitch con React",
            component : <APIRest />,
            link_to : "https://game-list-twitch-api.vercel.app/",
            link_code : "https://codesandbox.io/s/consuming-twitch-api-mbvm7"
        },
        {
            title : props.english ? "Django's suggestions blog." : "Blog de sugerencias con Django",
            component : <DjangoBlog />,
            link_to : "https://blogsito2.herokuapp.com/",
            link_code : "https://github.com/sebamont/publicBlog"
        },
        {
            title : props.english ? "SVG + CSS Animations" : "Animaciones SVG+CSS",
            component : <SvgLogo />,
            link_to : "/",
            link_code : "https://codepen.io/seba_mont/pen/gOLrNzJ"
        },
         {
            title : props.english ? "Responsive Web Design with React+Bootstrap":"Diseño de Sitios Responsive con React+Bootstrap",
            component : <ResponsiveWeb />,
            link_to : "https://rotonda-react.vercel.app/",
            link_code : "https://github.com/sebamont/rotonda-react"
        },
        {
            title : props.english ? "Hobby: GameDev with Unity" : "Hobby: Desarrollo de videojuegos con Unity",
            component : <UnityHobby />,
            link_to : "/",
            link_code : "/"
        },
        
    ]

    

    return(
        <motion.div id="monitor-wrapper" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div id="monitor">
                <div className="monitor-title">
                    {/* <h1>SVG + CSS Animations</h1> */}
                    <h1>{projects[props.currentProj].title}</h1>
                </div>
                <div className="monitor-content">
                    {/* <SvgLogo /> */}
                    {projects[props.currentProj].component}
                </div>
                <div className="monitor-info">
                    {props.currentProj < props.maxIndexOfProj &&
                    <div>
                        <a href={projects[props.currentProj].link_to} target="_blank">Live Example</a> &nbsp;
                        <a href={projects[props.currentProj].link_code} target="_blank">Code</a> <br />
                    </div>
                    }
                        <span>{props.english ? "Press joystick left/rigth buttons for prev/next, or any other button to exit" : "Use las flechas horiztonales para el sig/anterior, o cualquier botón para salir"}</span>
                </div>
            </div>
        </motion.div>
    )
}