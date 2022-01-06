import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";

export default function useModalSignUpContent(){

    const [state, setState] = useState({
        nickname: "",
        game_nickname: "",
        tier:"",
        line:"",
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

    const enroll = useCallback( async () => {

        const res = await apiClient.post(`http://52.87.226.126:8000/members/signup`,
            {
                nickname: state.nickname,
                game_nickname: state.game_nickname,
                tier:state.tier,
                line:state.line,
            }
        );
        console.log(res);
    }, [state]);

    return {
        state,
        handleChange,
        enroll,
    };
}