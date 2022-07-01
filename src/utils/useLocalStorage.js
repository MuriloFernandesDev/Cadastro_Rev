import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(key)
        const initial = saved !== null ? JSON.parse(saved) : defaultValue

        return initial
    }
}

export const useLocalStorage = (key, initial) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, initial)
    })

    // useEffect(() => {
    //     // storing input name
    //     localStorage.setItem(key, JSON.stringify(value))
    // }, [key, value])

    // return [value, setValue]
}
