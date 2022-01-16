import {useCallback} from "react";
import {useRouter} from "next/router";

export default function useMemberNav() {

    const router = useRouter();

    const signOut = useCallback( () => {
        localStorage.removeItem('member');
        localStorage.removeItem('game_nickname');

        router.reload();
    })

    return {
        signOut
    }
}