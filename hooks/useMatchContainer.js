import {useEffect, useState, useCallback} from "react";

export default function useMatchContainer(){

    useEffect( () => {

    }, []);

    const [state, setState] = useState({
        isMatching: false,
        styleOpacity: 1,
        memberList: [
            {
                member_id : 1,
                nickname: "헨리",
                game_nickname: "참치라능",
                tier: "PLATINUM",
            },
            {
                member_id : 2,
                nickname: "재료",
                game_nickname: "딸기소스치킨",
                tier:"DIAMOND"
            }
        ]
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

    const addMember = useCallback( (token) => {

        const member = {
            member_id : 3,
            nickname: token,
            game_nickname: token,
            tier:"GOLD"
        }

        console.log("here");

        setState(state => ({
            ...state,
            memberList: [...state.memberList, member ]
        }));

        console.log(state);
    })

    return {
        state,
        handleChange,
        startMatching,
        addMember,
    };
}