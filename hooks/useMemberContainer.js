import {useEffect, useState, useCallback} from "react";

export default function useMemberContainer(){

    const [state, setState] = useState({
        isSignIn: false,
    })

    useEffect( () => {

    }, []);

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }, []);

    return {
        state,
        handleChange,
    };
}