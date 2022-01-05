import {useCallback, useEffect, useState} from "react";
import {TIER_BACKGROUND_COLOR} from "../common/contants";

export default function useMemberBox({params}){

    const [state, setState] = useState({
        backgroundColor: TIER_BACKGROUND_COLOR[params.tier].value,
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
    }
}