import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations} from '../../pageTransition/pageTransition';
import './contact.css';

export function Contact(){

    return(
        <motion.div className="contact-container" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div className="contact-header-container">
                <div className="contact-left-column">
                    
                        
                </div>
                <div className="contact-right-column">
                    <h2 id="contact-title" className="arcade-font">Thank you for passing by</h2>
                    <p id="contact-text">If you'd like to contact me, whether it is about a Job located in Salta or Cordoba (ARG), a Remote Job, a Freelance Job, or just because you felt like it, you can find me in</p>     
                    <div className="contact-options">
                        <a href="mailto:sebamontagna@gmail.com" target="_blank"><i className="far fa-envelope"></i></a>
                        <a href="https://github.com/sebamont" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sebastian-montagna/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/Seba_mont/" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="tel:+543875423222" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>

            </div>
            
        </motion.div>
    )
}