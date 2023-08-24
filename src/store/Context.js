import { createContext, useEffect, useReducer } from "react";
import reducer from './Reducer'
import { LOGO_IMG } from '../constant'

export const NgoContext = createContext("")
const initialData = {
    logo: LOGO_IMG,
    currentScreenSize: window.innerWidth,
}

const NgoContextWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialData)
    useEffect(() => {
        function sizeOfScreen() {
            dispatch({ type: 'RESIZE', payload: window.innerWidth })
        }
        window.addEventListener('resize', sizeOfScreen)
        return () => window.removeEventListener('resize', sizeOfScreen)
    }, [])
    return <NgoContext.Provider value={{ state, dispatch }}>
        {children}
    </NgoContext.Provider>
}
export default NgoContextWrapper