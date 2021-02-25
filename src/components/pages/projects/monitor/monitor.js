import React, {useContext, useEffect} from 'react';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../../pageTransition/pageTransition';
import './monitor.css';

//Importing contexts
import {GlobalContext} from '../../../../context/GlobalContext';
import {ProjectContext} from '../../../../context/ProjectsContext';


export function Monitor (props){
    const {english} = useContext(GlobalContext);
    const {maxIndexOfProj, projects, currentProj} = useContext(ProjectContext);
    
    useEffect( ()=>{
        document.title = `Sebastian Montagna - ${english?"Projects":"Proyectos"}`
    },[english])

    return(
        <motion.div id="monitor-wrapper" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div id="monitor">
                <div className="monitor-title">
                    <h1>{projects[currentProj].title}</h1>
                </div>
                <div className="monitor-content">
                    {projects[currentProj].component}
                </div>
                <div className="monitor-info">
                    {currentProj < maxIndexOfProj &&
                    <div>
                        <a href={projects[currentProj].link_to} target="_blank">Live Example</a> &nbsp;
                        <a href={projects[currentProj].link_code} target="_blank">Code</a> <br />
                    </div>
                    }
                        <span>{english ? "Press joystick left/rigth buttons for prev/next, or any other button to exit" : "Use las flechas horizontales para el sig/anterior, o cualquier botón para salir"}</span>
                </div>
            </div>
        </motion.div>
    )
}