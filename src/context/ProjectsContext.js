import React, {createContext, useState, useContext} from 'react';

//global context
import {GlobalContext} from './GlobalContext';

//Project components
import {SvgLogo} from '../components/pages/projects/projects/svgAnimations/svgLogo';
import {ResponsiveWeb} from '../components/pages/projects/projects/responsiveWeb/responsiveWeb';
import {DjangoBlog} from '../components/pages/projects/projects/djangoBlog/djangoBlog';
import {UnityHobby} from '../components/pages/projects/projects/unityHobby/unityHobby';
import {APIRest} from '../components/pages/projects/projects/apiRest/apiRest';
import {ExpenseTracker} from '../components/pages/projects/projects/expenseTracker/expenseTracker';

export const ProjectContext = createContext();

export const ProjectContextProvider = (props) => {
    const {english} = useContext(GlobalContext);
    const maxIndexOfProj = 5; // current N° of projs = 6 (so index is -1)

    const projects = [
        {
            title : english ? "Expense Tracker":"Anotador de Ingresos y Gastos",
            component : <ExpenseTracker />,
            link_to : "https://expense-tracker-mern-sebamont.herokuapp.com/",
            link_code : "https://github.com/sebamont/alkemy-challenge",
            usedTechs: "Node.js, Express, MongoDB,<br /> mongoose, React, Chakra UI,<br /> axios, Recharts, React-Router"
        },
        {
            title : english ? 'CAR Store: Rest APIs with React' : "CAR Store:&nbsp; Rest APIs con React",
            component : <APIRest />,
            link_to : "https://simplicar-challenge.vercel.app/",
            link_code : "https://github.com/sebamont/simplicar-challenge",
            usedTechs: " React, React-Router, axios, <br /> Reactstrap, Bootstrap"
        },
        {
            title : english ? "Django's &nbsp;suggestions&nbsp; blog." : "Blog de sugerencias con Django",
            component : <DjangoBlog />,
            link_to : "https://blogsito2.herokuapp.com/",
            link_code : "https://github.com/sebamont/publicBlog",
            usedTechs: "Monolithic Django"
        },
        {
            title : english ? "SVG + CSS Animations" : "Animaciones SVG+CSS",
            component : <SvgLogo />,
            link_to : "/",
            link_code : "https://codepen.io/seba_mont/pen/gOLrNzJ",
            usedTechs: "SVGs, CSS, Keyframes, Animate"
        },
         {
            title : english ? "Responsive Web Design with React+Bootstrap":"Diseño de Sitios Responsive con React+Bootstrap",
            component : <ResponsiveWeb />,
            link_to : "https://rotonda-react.vercel.app/",
            link_code : "https://github.com/sebamont/rotonda-react",
            usedTechs: "Bootstrap, React, React-Router, <br />HTML5, CSS3"
        },
        {
            title : english ? "Hobby: GameDev with Unity" : "Hobby: Desarrollo de videojuegos con Unity",
            component : <UnityHobby />,
            link_to : "/",
            link_code : "/",
            usedTechs: "Unity, UnityAPI, C#"
        },
        
    ]

    const [proj, setProj] = useState(0)

    const handleNextProj = (e) => {
        e.preventDefault();
        if (proj < maxIndexOfProj){ 
          let nextProj = proj +1;
          setProj(nextProj);
        }
    }

    const handlePrevProj = (e) => {
        e.preventDefault();
        if (proj > 0){
          let prevProj = proj -1;
          setProj(prevProj);
        }
        
    }


    return (
        <ProjectContext.Provider
            value={{
                maxIndexOfProj,
                projects,
                currentProj: proj,
                handleNextProj,
                handlePrevProj
            }}>
            {props.children}
        </ProjectContext.Provider>)
}