import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";
import {useRouter} from "next/router";
import {LOCAL_IP_ADDRESS} from "../common/contants";
import useLoading from "./useLoading";

export default function useModalSignInContent({params}){

    const [state, setState] = useState({
        game_nickname: "",
        token: "",
    });

    const router = useRouter();

    const {showLoadingIcon, closeLoadingIcon} = useLoading();

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
        showLoadingIcon();
        const res = await apiClient.post(`${LOCAL_IP_ADDRESS}/members/signin`,
            {
                game_nickname: state.game_nickname,
            }
        );

        setState(state => ({
            ...state,
            token: res.data.TOKEN
        }));

        localStorage.setItem("member", res.data.TOKEN);
        localStorage.setItem("game_nickname", state.game_nickname)
        closeLoadingIcon();
        router.reload();
    }, [state]);

    return {
        state,
        handleChange,
        enroll,
    };
}