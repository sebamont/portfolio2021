import React, {createContext, useState, useContext} from 'react';

//global context
import {GlobalContext} from './GlobalContext';

//Project components
import {SvgLogo} from '../components/pages/projects/projects/svgAnimations/svgLogo';
import {ResponsiveWeb} from '../components/pages/projects/projects/responsiveWeb/responsiveWeb';
import {DjangoBlog} from '../components/pages/projects/projects/djangoBlog/djangoBlog';
import {UnityHobby} from '../components/pages/projects/projects/unityHobby/unityHobby';
import {APIRest} from '../components/pages/projects/projects/apiRest/apiRest';

export const ProjectContext = createContext();

export const ProjectContextProvider = (props) => {
    const {english} = useContext(GlobalContext);
    const maxIndexOfProj = 4; // current N° of projs = 5 (so index is -1)

    const projects = [
        {
            title : english ? 'Consuming &nbsp;Twitch&nbsp; Rest APIs with React' : "Usando Rest APIs de &nbsp;Twitch&nbsp; con React",
            component : <APIRest />,
            link_to : "https://game-list-twitch-api.vercel.app/",
            link_code : "https://codesandbox.io/s/consuming-twitch-api-mbvm7"
        },
        {
            title : english ? "Django's &nbsp;suggestions&nbsp; blog." : "Blog de sugerencias con Django",
            component : <DjangoBlog />,
            link_to : "https://blogsito2.herokuapp.com/",
            link_code : "https://github.com/sebamont/publicBlog"
        },
        {
            title : english ? "SVG + CSS Animations" : "Animaciones SVG+CSS",
            component : <SvgLogo />,
            link_to : "/",
            link_code : "https://codepen.io/seba_mont/pen/gOLrNzJ"
        },
         {
            title : english ? "Responsive Web Design with React+Bootstrap":"Diseño de Sitios Responsive con React+Bootstrap",
            component : <ResponsiveWeb />,
            link_to : "https://rotonda-react.vercel.app/",
            link_code : "https://github.com/sebamont/rotonda-react"
        },
        {
            title : english ? "Hobby: GameDev with Unity" : "Hobby: Desarrollo de videojuegos con Unity",
            component : <UnityHobby />,
            link_to : "/",
            link_code : "/"
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