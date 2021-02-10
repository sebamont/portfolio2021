import React from 'react';
import './monitor.css';

//Project components
import {SvgLogo} from '../projects/svgAnimations/svgLogo'
import {ResponsiveWeb} from '../projects/responsiveWeb/responsiveWeb'

export function Monitor (props){
    const projects = [{
       
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
        
    ]

    

    return(
        <div id="monitor-wrapper">
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
                    <a href={projects[props.currentProj].link_to} target="_blank">Live Example</a> &nbsp;
                    <a href={projects[props.currentProj].link_code} target="_blank">Code</a> <br />
                    <span>Press joystick horizontal arrow to change, or any button to exit</span>
                </div>
            </div>
        </div>
    )
}