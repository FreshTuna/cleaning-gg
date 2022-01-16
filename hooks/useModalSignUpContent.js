import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";
import {LOCAL_IP_ADDRESS} from "../common/contants";
import useLoading from "./useLoading";

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

    const {showLoadingIcon, closeLoadingIcon} = useLoading();

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }, []);

    const enroll = useCallback( async () => {
        showLoadingIcon();
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
            closeLoadingIcon();
        }
        else{
            closeLoadingIcon();
            params.onClose()
        }

    }, [state]);

    return {
        state,
        handleChange,
        enroll,
    };
}