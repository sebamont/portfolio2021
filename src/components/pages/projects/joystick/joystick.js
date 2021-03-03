import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageTransition, PageTransitionDurations}from '../../../pageTransition/pageTransition';
import './joystick.css';

//import contexts
import {ProjectContext} from '../../../../context/ProjectsContext';

export function Joystick(props){
    const {maxIndexOfProj, currentProj, handleNextProj, handlePrevProj} = useContext(ProjectContext);
 
    return(
        <motion.div id="joystick-container" exit={pageTransition.out} initial={pageTransition.out} animate={pageTransition.in} transition={PageTransitionDurations}>
            <div id="wire">
                
            </div>
            <div id="joystick">
                <svg width="303" height="128" viewBox="0 0 303 128" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Svg drawed Joystick">
                <g filter="url(#filter0_i)">
                <ellipse cx="53.9703" cy="39.7096" rx="44.5677" ry="39.7096" fill="#686868"/>
                <g filter="url(#filter1_d)">
                <ellipse cx="250.828" cy="39.7096" rx="44.5677" ry="39.7096" fill="#686868"/>
                </g>
                </g>
                <g filter="url(#filter2_i)">
                <g filter="url(#filter3_i)">
                <path d="M38.9736 12.2509H260.756V95.472H38.9736V12.2509Z" fill="#C4C4C4"/>
                </g>
                <circle cx="63.0528" cy="65.901" r="62.099" fill="#C4C4C4"/>
                <circle cx="240.901" cy="65.901" r="62.099" fill="#C4C4C4"/>
                </g>
                <g filter="url(#filter4_di)">
                <ellipse cx="63" cy="65.5" rx="36" ry="35.5" fill="#DEDBDB"/>
                </g>
                <g filter="url(#filter5_di)">
                <circle cx="241.5" cy="65.5" r="35.5" fill="#DEDBDB"/>
                </g>
                <g filter="url(#filter6_di)">
                <Link to="/contact"><path d="M132.613 85.936C123.877 86.778 115.274 84.2344 113.397 80.2548C111.521 76.2751 117.082 72.3665 125.819 71.5245C134.555 70.6825 143.158 73.2261 145.034 77.2058C146.911 81.1854 141.349 85.0941 132.613 85.936Z" fill="#7C7F89" id="exit-button" className="exit-buttons"/></Link>
                </g>
                <g filter="url(#filter7_di)">
                <Link to="/contact"><path d="M179.613 86.1944C170.877 87.0364 162.274 84.4928 160.397 80.5132C158.521 76.5335 164.082 72.6248 172.819 71.7829C181.555 70.9409 190.158 73.4845 192.034 77.4642C193.911 81.4438 188.349 85.3525 179.613 86.1944Z" fill="#7C7F89" id="start-button" className="exit-buttons"/></Link>
                </g>
                <rect x="71" y="55" width="19" height="19" fill="#777777" className={currentProj < maxIndexOfProj ? currentProj === 0 ? "next-proj-button blink-button" : "next-proj-button" : ""}  onClick={handleNextProj}/>
                <rect x="35" y="55" width="18" height="19" fill="#777777" className={currentProj > 0 ? currentProj === maxIndexOfProj ? "prev-proj-button blink-button" : "prev-proj-button" : ""} onClick={handlePrevProj}/>
                <rect x="52" y="38" width="20" height="36" fill="#777777"/>
                <rect x="52" y="69" width="20" height="25" fill="#777777"/>
                
                <g filter="url(#filter8_d)">
                <line x1="120.083" y1="42.0115" x2="183.449" y2="42.0115" stroke="#DFDFDF" strokeWidth="3"/>
                </g>
                <g filter="url(#filter9_d)">
                <line x1="120.083" y1="34.83" x2="183.449" y2="34.83" stroke="#DFDFDF" strokeWidth="3"/>
                </g>
                <g filter="url(#filter10_di)">
                <Link to="/contact"><ellipse rx="8.03017" ry="10.8098" transform="matrix(0.963461 0.26785 -0.734086 0.679057 222.446 67.1678)" fill="#60545F" id="left-button" className="exit-buttons"/></Link>
                </g>
                <g filter="url(#filter11_di)">
                <Link to="/contact"><ellipse rx="8.03017" ry="10.8098" transform="matrix(0.963461 0.26785 -0.734086 0.679057 244.286 51.028)" fill="#60545F" id="top-button" className="exit-buttons"/></Link>
                </g>
                <g filter="url(#filter12_di)">
                <Link to="/contact"><ellipse rx="8.03017" ry="10.8098" transform="matrix(0.963461 0.26785 -0.734086 0.679057 237.416 81.2482)" fill="#4E5263" id="bottom-button" className="exit-buttons"/></Link>
                </g>
                <g filter="url(#filter13_di)">
                <Link to="/contact"><ellipse rx="8.03017" ry="10.8098" transform="matrix(0.963461 0.26785 -0.734086 0.679057 259.256 65.1084)" fill="#4E5263" id="right-button" className="exit-buttons"/></Link>
                </g>
                <defs>
                <filter id="filter0_i" x="9.40265" y="0" width="285.993" height="83.4191" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <filter id="filter1_d" x="202.261" y="0" width="97.1353" height="87.4191" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter2_i" x="0.953796" y="3.802" width="302.046" height="128.198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <filter id="filter3_i" x="38.9736" y="12.2509" width="221.782" height="132.221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="49"/>
                <feGaussianBlur stdDeviation="27"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.8125 0 0 0 0 0.795573 0 0 0 0 0.795573 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <filter id="filter4_di" x="23" y="30" width="80" height="79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter5_di" x="202" y="30" width="79" height="79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter6_di" x="109.033" y="71.3635" width="40.3651" height="22.7335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter7_di" x="156.033" y="71.6219" width="40.3651" height="22.7335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter8_d" x="116.083" y="37.5115" width="71.3663" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter9_d" x="116.083" y="30.33" width="71.3663" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter10_di" x="207.363" y="59.5167" width="30.1654" height="23.3022" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter11_di" x="229.203" y="43.3769" width="30.1654" height="23.3022" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter12_di" x="222.333" y="73.5971" width="30.1654" height="23.3022" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter13_di" x="244.174" y="57.4573" width="30.1654" height="23.3022" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                </defs>
                </svg>



            </div>
        </motion.div>
    )
}

