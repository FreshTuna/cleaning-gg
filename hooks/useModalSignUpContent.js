import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";

export default function useModalSignUpContent({params}){

    const [state, setState] = useState({
        nickname: "",
        game_nickname: "",
        tier:"",
        line:"",
        validation:"",
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

        const res = await apiClient.post(`${LOCAL_IP_ADDRESS}/members/signup`,
            {
                nickname: state.nickname,
                game_nickname: state.game_nickname,
                tier:state.tier,
                line:state.line,
            }
        );
        console.log(res);

        if(res.data.MESSAGE == "GAME_NICKNAME_DUPLICATED"){
            setState(state => ({
                ...state,
                validation:"이미 등록된 닉네임 입니다!",
            }));
        }
        else{
            params.onClose()
        }

    }, [state]);

    return {
        state,
        handleChange,
        enroll,
    };
}