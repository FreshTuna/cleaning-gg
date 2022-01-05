import {useEffect, useState, useCallback} from "react";

export default function useMatchContainer(){

    useEffect( () => {

    }, []);

    const [state, setState] = useState({
        isMatching: false,
        styleOpacity: 1,
    })

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }, []);

    const startMatching = useCallback( () => {

        setState(state => ({
            ...state,
            isMatching: true,
        }));
    }, []);

    return {
        state,
        handleChange,
        startMatching,
    };
}