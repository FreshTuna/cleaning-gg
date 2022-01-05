import {useEffect, useState, useCallback} from "react";

export default function useModalContent(){

    const [state, setState] = useState({
        nickname: "",
        game_nickname: "",
        tier:"",
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