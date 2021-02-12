import React from 'react';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../../pageTransition/pageTransition';
import './monitor.css';

//Project components
import {SvgLogo} from '../projects/svgAnimations/svgLogo';
import {ResponsiveWeb} from '../projects/responsiveWeb/responsiveWeb';
import {DjangoBlog} from '../projects/djangoBlog/djangoBlog';
import {UnityHobby} from '../projects/unityHobby/unityHobby';

export function Monitor (props){
    const projects = [
        {
            title : "Django's suggestions blog.",
            component : <DjangoBlog />,
            link_to : "https://blogsito2.herokuapp.com/",
            link_code : "https://github.com/sebamont/publicBlog"
        },
        {
            title : "SVG + CSS Animations",
            component : <SvgLogo />,
            link_to : "/",
            link_code : "https://codepen.io/seba_mont/pen/gOLrNzJ"
        },
         {
            title : "Responsive Web Design with React+Bootstrap",
            component : <ResponsiveWeb />,
            link_to : "https://rotonda-react.vercel.app/",
            link_code : "https://github.com/sebamont/rotonda-react"
        },
        {
            title : "Hobby: GameDev with Unity",
            component : <UnityHobby />,
            link_to : "/",
            link_code : "/"
        },
        
    ]

    

    return(
        <motion.div id="monitor-wrapper" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div id="monitor">
                <div className="monitorTitle">
                    {/* <h1>SVG + CSS Animations</h1> */}
                    <h1>{projects[props.currentProj].title}</h1>
                </div>
                <div className="monitorContent">
                    {/* <SvgLogo /> */}
                    {projects[props.currentProj].component}
                </div>
                <div className="monitorInfo">
                    {props.currentProj < 3 &&
                    <div>
                        <a href={projects[props.currentProj].link_to} target="_blank">Live Example</a> &nbsp;
                        <a href={projects[props.currentProj].link_code} target="_blank">Code</a> <br />
                    </div>
                    }
                        <span>Press joystick left/rigth buttons for prev/next, or any other button to exit</span>
                </div>
            </div>
        </motion.div>
    )
}