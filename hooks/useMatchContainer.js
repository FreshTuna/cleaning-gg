import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";

export default function useMatchContainer(){

    useEffect( () => {

    }, []);

    const [state, setState] = useState({
        isMatching: false,
        styleOpacity: 1,
        matchId:0,
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

    const onLoad = useCallback( async () => {
        const res = await apiClient.get(`http://192.168.35.224:8000/matches/list`);

        console.log(res);

        if(res.data.MESSAGE == "MATCH_JOINED"){

            const match_members = await apiClient.get(`http://192.168.35.224:8000/entries/members?match_id=${res.data.match.match_id}`);
            console.log(match_members);

            setState( (state) => ({
                ...state,
                matchId: res.data.match.match_id,
                isMatching: true,
            }));
        }
    })

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }, []);

    const startMatching = useCallback( async (token) => {

        const res = await apiClient.post(`http://192.168.35.224:8000/matches/create`,
            {
                owner_nickname: token
            }
        );

        console.log(res);

        setState(state => ({
            ...state,
            isMatching: true,
        }));
    }, []);

    const addMember = useCallback( async (token) => {

        console.log(state);
        const res = await apiClient.post(`http://192.168.35.224:8000/entries/create`,
            {
                game_nickname: token,
                match_id: state.matchId,
            }
        );

        console.log(res);

        if(res.data.MESSAGE == 'ENTRY_EXISTING'){
            alert("이미 엔트리에 참여되어있습니다!");

            return;
        }

        const member = {
            member_id : res.data.member.member_id,
            nickname: res.data.member.nickname,
            game_nickname: res.data.member.game_nickname,
            tier: res.data.member.tier,
        }

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
        onLoad,
    };
}