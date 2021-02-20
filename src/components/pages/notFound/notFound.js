import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../pageTransition/pageTransition';
import './notFound.css';

//importing contexts
import {GlobalContext} from '../../../context/GlobalContext';

export function NotFound(){
    const {english} = useContext(GlobalContext);
    return(
        <motion.div className="error404-container" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div className="error404-title">
                <h2 className="arcade-font"><q><br />page not found</q> </h2>
            </div>
            <Link to="/">
                <div className="pure-button arcade-button blue">
                    {english?"BACK HOME":"INICIO"}
                </div>
            </Link>
        </motion.div>
    )
}