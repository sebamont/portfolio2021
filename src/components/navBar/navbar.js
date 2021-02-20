import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalContext';

import './navbar.css';

export function NavBar(){
    const {english, toggleLanguageFromContext} = useContext(GlobalContext);
    return(
        <nav className="navbar-container">
            <ul className="nav arcade-font">
                <li><Link to ="/">{english ? "Home" : "Inicio"}</Link></li>
                <li><Link to ="/projects">{english ? "Projects" : "Proyectos"}</Link></li>
                <li><Link to ="/contact">{english ? "Contact" : "Contacto"}</Link></li>
                
            </ul>
            <div><button onClick={toggleLanguageFromContext}><img src="https://www.countryflags.io/ar/flat/24.png"  alt=" AR flag" className={english ? "current-flag" : ""}/> <img src="https://www.countryflags.io/gb/flat/24.png" className={english ? "" : "current-flag" }alt="GB flag"/></button></div>
        </nav>
    )
}