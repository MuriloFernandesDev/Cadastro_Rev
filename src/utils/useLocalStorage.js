import { useState } from 'react'

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
    // if (saved == undefined) {
    //   const initial = ''
    //   return initial
    // } else {
    //   const initial = saved !== null ? JSON.parse(saved) : defaultValue
    //   return initial
    // }
  }
}

export const useLocalStorage = (key, initial) => {
  const [value] = useState(() => {
    return getStorageValue(key, initial ?? '')
  })
  return [value]
}
