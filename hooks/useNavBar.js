import {useEffect, useState, useCallback} from "react";

export default function useNavBar(){

    useEffect( () => {
        const checkUserData = () => {
            const item = localStorage.getItem('member');

            if(item){
                setState( state => ({
                    ...state,
                    user_data: item,
                }));
            }
        }

        const token = localStorage.getItem('member');
        const game_nickname = localStorage.getItem('game_nickname');

        setState( state => ({
            ...state,
            user_data: token,
            game_nickname:game_nickname,
        }));

        window.addEventListener('storage', checkUserData);

        return () => {
            window.removeEventListener('Storage', checkUserData);
        }
    }, []);

    const [state, setState] = useState({
        member_nickname: "참치라능",
        user_data: "",
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