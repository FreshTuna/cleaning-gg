import {useCallback, useState} from "react";
import {apiClient} from "../common/util";
import {LOCAL_IP_ADDRESS} from "../common/contants";

export default function useModalMemberInfoContent({params}){

    const [state, setState] = useState({
        memberId: params.entry.member_id ,
        entryId: params.entry.entry_id,
        memberNickname : params.entry.nickname,
        memberGameNickname: params.entry.game_nickname,
        leaderYn: false,
    })


    const deleteEntry = useCallback( async () => {

        const res = await apiClient.post(`${LOCAL_IP_ADDRESS}/entries/delete`,
            {
                entry_id: state.entryId,
            });

        params.setNewMemberList(res.data.entry_list);
        params.onClose();
    })


    const handleLeader = useCallback( async (value) => {

        const res = await apiClient.put(`${LOCAL_IP_ADDRESS}/entries/leader`,
            {
                entry_id: state.entryId,
                leader_yn: value,
            });

        params.setNewMemberList(res.data.entry_list);
        params.onClose();
    })

    return {
        state,
        deleteEntry,
        handleLeader,
    }

}