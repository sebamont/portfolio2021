import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../pageTransition/pageTransition';
import './notFound.css';

export function NotFound(props){
    return(
        <motion.div className="error404-container" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div className="error404-title">
                <h2 className="arcade-font"><q><br />page not found</q> </h2>
            </div>
            <Link to="/">
                <div className="pure-button arcade-button blue">
                    BACK HOME
                </div>
            </Link>
        </motion.div>
    )
}