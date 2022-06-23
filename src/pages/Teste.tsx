import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactChild, ReactChildren } from 'react'

interface AuxProps {
    children: ReactChild | ReactChildren
}

export default function Teste({ children }: AuxProps) {
    const router = useRouter()
    return <div className="drawer-content overflow-hidden">{children}</div>
}
