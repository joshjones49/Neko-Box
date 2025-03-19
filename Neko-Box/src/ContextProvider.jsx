import React, {useState, useCallback} from 'react';
import toast, {Toaster} from 'react-hot-toast'
export const Context = React.createContext();

const NekoContextProvider = ({children}) => {
    const url = 'http://localhost:8008/';

    // STATE
    const [shows, setShows] = useState([]);
    const [currentShow, setCurrentShow] = useState([]);

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

    const getShowDetails = useCallback(async (id) => {
        try {
            const res = await fetch(url+'show-details/'+id)
            const data = await res.json();
            console.log(data)
            setCurrentShow(data);
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }, [url]);


    return (
        <Context.Provider value={{
            shows, setShows, getShows,
            currentShow, setCurrentShow, getShowDetails
        }}>
            {children}
        </Context.Provider>
    )
}

export default NekoContextProvider;