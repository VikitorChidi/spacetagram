import { useState, useEffect } from "react";

type ReturnType<T> = [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
]
export const useLocalStorage = <T,>(key: string, initialvalue?: T): ReturnType<T> => {
    const [state, setState] = useState<T | undefined>(
        () => {
            if (!initialvalue) return;
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : initialvalue;
            } catch (err) {
                return initialvalue;
            }
        }
    );

    useEffect(() => {
        if (state) {
            try {
                localStorage.setItem(key, JSON.stringify(state));
            } catch (err) {
                console.log(err)
            }
        }
    }, [state, key]);

    return [state, setState];
};