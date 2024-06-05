import { useContext, useEffect } from 'react';
import { NgoContext } from '../store/Context';

const useScreenSize = () => {
    const { state, dispatch } = useContext(NgoContext);

    useEffect(() => {
        function sizeOfScreen() {
            dispatch({ type: 'RESIZE', payload: window.innerWidth });
        }

        window.addEventListener('resize', sizeOfScreen);

        sizeOfScreen();

        return () => window.removeEventListener('resize', sizeOfScreen);
    }, [dispatch]);

    return { state, dispatch }; 
}

export default useScreenSize;
