import {useEffect, useState, useCallback} from "react";
import {apiClient} from "../common/util";
import {LOCAL_IP_ADDRESS} from "../common/constants";
import useLoading from "./useLoading";

export default function useMatchContainer({params}){
    const {showLoadingIcon, closeLoadingIcon} = useLoading();

    useEffect( () => {

    }, []);

    const [state, setState] = useState({
        matchStatus:"",
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
                matchStatus: res.data.match.status,
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
            matchStatus: "MATCHING",
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
                game_nickname: localStorage.getItem('game_nickname'),
                match_id:state.matchId,
            })

        if(res.data.MESSAGE == 'ENTRY_NOT_FULL'){
            closeLoadingIcon();
            alert("아직 10명이 모이지 않았습니다!");
            return;
        } else if(res.data.MESSAGE == 'NOT_ALLOWED'){
            closeLoadingIcon();
            alert(`리더 또는 매치 생성자만 매치를 시작할 수 있습니다!\n매치 생성자 : ${res.data.MATCH_OWNER}`);
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