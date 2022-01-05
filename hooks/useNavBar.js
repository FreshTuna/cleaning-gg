import {useEffect, useState, useCallback} from "react";

export default function useNavBar(){

    useEffect( () => {

    }, []);

    const [state, setState] = useState({
        member_nickname: "참치라능",
    })

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