import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

export function NavBar(props){
    return(
        <nav className="navbar-container">
            <ul className="nav arcade-font">
                <li><Link to ="/">{props.english ? "Home" : "Inicio"}</Link></li>
                <li><Link to ="/projects">{props.english ? "Projects" : "Proyectos"}</Link></li>
                <li><Link to ="/contact">{props.english ? "Contact" : "Contacto"}</Link></li>
                
            </ul>
            <div><button onClick={props.handleChangeLanguage}><img src="https://www.countryflags.io/ar/flat/24.png"  alt=" AR flag" className={props.english ? "current-flag" : ""}/> <img src="https://www.countryflags.io/gb/flat/24.png" className={props.english ? "" : "current-flag" }alt="GB flag"/></button></div>
        </nav>
    )
}