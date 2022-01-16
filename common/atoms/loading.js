import { atom } from 'recoil';

export const loadingState = atom({
    key: 'loadingState',
    default: {
        visible: false,
    },
});