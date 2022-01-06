import axios from "axios";

export const apiClient = axios.create({
    header: {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        referrer: 'no-referrer',
    },
});
