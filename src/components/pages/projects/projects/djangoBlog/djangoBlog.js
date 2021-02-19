import React from 'react';
import djangoBlog from './djangoBlog.png';
import './djangoBlog.css';

export function DjangoBlog(){
    return(
        <div id="djangoBlog-container">
            <img src={djangoBlog} alt="Django blog example"/>
        </div>
    )
}