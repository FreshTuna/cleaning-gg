import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";
import {LOCAL_IP_ADDRESS} from "../common/constants";
import useLoading from "./useLoading";

export default function useMatchContainer({params}){
    const {showLoadingIcon, closeLoadingIcon} = useLoading();

    useEffect( () => {

    }, []);

    const [state, setState] = useState({
        isMatching: false,
        styleOpacity: 1,
        matchId:0,
        memberList: [],

    })

    const onLoad = useCallback( async () => {
        showLoadingIcon();
        const res = await apiClient.get(`${LOCAL_IP_ADDRESS}/matches/list`);

        console.log(res);

        if(res.data.MESSAGE == "MATCH_JOINED"){
            setState( (state) => ({
                ...state,
                matchId: res.data.match.match_id,
                isMatching: true,
                memberList: res.data.entry_list,
            }));
            closeLoadingIcon();
        }
        closeLoadingIcon();
    })

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setState(state => ({
            ...state,
            [name]: value
        }));
    }, []);

    const refreshMemberList = useCallback( (member_list) => {
        setState( state => ({
            ...state,
            memberList:member_list,
        }));

    }, []);


    const startMatching = useCallback( async (token) => {
        showLoadingIcon();
        const res = await apiClient.post(`${LOCAL_IP_ADDRESS}/matches/create`,
            {
                owner_nickname: token
            }
        );

        setState(state => ({
            ...state,
            isMatching: true,
        }));
        closeLoadingIcon()
    }, []);

    const addMember = useCallback( async (token) => {
        showLoadingIcon();
        const res = await apiClient.post(`${LOCAL_IP_ADDRESS}/entries/create`,
            {
                game_nickname: token,
                match_id: state.matchId,
            }
        );

        if(res.data.MESSAGE == 'ENTRY_EXISTING'){
            closeLoadingIcon();
            alert("이미 엔트리에 참여되어있습니다!");
            return;
        } else if(res.data.MESSAGE == 'ENTRY_FULL'){
            closeLoadingIcon();
            alert("엔트리가 꽉 찼습니다!");
            return;
        } else if(res.data.MESSAGE == 'NO_NICKNAME_EXISTING'){
            closeLoadingIcon();
            alert("찾을 수 없는 닉네임입니다! (로그인 재시도 )");
            return;
        }

        const member = {
            member_id : res.data.member.member_id,
            nickname: res.data.member.nickname,
            entry_id: res.data.member.entry_id,
            game_nickname: res.data.member.game_nickname,
            tier: res.data.member.tier,
        }

        setState(state => ({
            ...state,
            memberList: [...state.memberList, member ]
        }));
        closeLoadingIcon();
    });

    const startRandomize = useCallback( async () => {
        showLoadingIcon();
        const res = await apiClient.post(`${LOCAL_IP_ADDRESS}/matches/randomize`,
            {
                match_id:state.matchId,
            })

        if(res.data.MESSAGE == 'ENTRY_NOT_FULL'){
            closeLoadingIcon();
            alert("아직 10명이 모이지 않았습니다!");
            return;
        }

        closeLoadingIcon();
        params.openRoasterModal(res.data.roaster);
    });

    return {
        state,
        handleChange,
        refreshMemberList,
        startMatching,
        startRandomize,
        addMember,
        onLoad,
    };
}