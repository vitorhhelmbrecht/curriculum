import { useEffect, useState } from 'react';

function usePersistentState(key, initialValue) {
    const [state, setState] = useState(() => {
        if (typeof window == 'undefined')
            return initialValue;

        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue);
        }

        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
}

export default usePersistentState;