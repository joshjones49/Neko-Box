import React, {useState} from 'react';
export const Context = React.createContext();

const NekoContextProvider = ({children}) => {
    const url = 'http://localhost:8008'


    return (
        <Context.Provider value={{
            
        }}>
            {children}
        </Context.Provider>
    )
}

export default NekoContextProvider;