import React, {useState} from 'react';
import toast, {Toaster} from 'react-hot-toast'
export const Context = React.createContext();

const NekoContextProvider = ({children}) => {
    const url = 'http://localhost:8008';
    let data;

    // STATE
    const [shows, setShows] = useState([]);

    //GET FUNCTIONS
    const getShows = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setShows(data)
            console.log(shows)
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const getShowDetails = () => {
        try {

        } catch (error) {
            
        }
    }


    return (
        <Context.Provider value={{
            shows, setShows, getShows
        }}>
            {children}
        </Context.Provider>
    )
}

export default NekoContextProvider;