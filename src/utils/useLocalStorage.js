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
  const [value] = useState(() => {
    return getStorageValue(key, initial)
  })
  return [value]
}
