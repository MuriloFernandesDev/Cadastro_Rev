import { useState, useEffect } from 'react'

const ClientOnly = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? children : null
}

export default ClientOnly
