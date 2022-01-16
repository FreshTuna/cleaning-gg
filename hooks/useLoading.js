import {useCallback, useState} from "react";
import { useRecoilState } from 'recoil';
import { loadingState } from '../common/atoms/loading';

export default function useLoading() {

    const [state, setState] = useRecoilState(loadingState);

    const showLoadingIcon = useCallback( () => {

        setState( state => ({
            ...state,
            visible:true,
        }), []);

    })

    const closeLoadingIcon = useCallback( () => {
        setState(state => ({
            ...state,
            visible:false,
        }))
    })

    return {
        visible:state.visible,
        showLoadingIcon,
        closeLoadingIcon,
    }

}