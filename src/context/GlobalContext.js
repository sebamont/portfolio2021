import React, {createContext, useState} from 'react';

//local storage
import {useLocalStorage} from '../functions/useLocalStorage'

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    const [english, setEnglish] = useLocalStorage("english",true);

    const toggleLanguageFromContext = (e) => {
        e.preventDefault();
        const isEnglishSelected = english;
        setEnglish(!isEnglishSelected);
    }

    return (
        <GlobalContext.Provider
            value={{
                english: english,
                toggleLanguageFromContext
            }}>
            {props.children}
        </GlobalContext.Provider>)
}