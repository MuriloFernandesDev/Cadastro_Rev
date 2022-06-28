import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'
import Progress from '../Progress'

interface Homeprops {
    children: ReactElement
}

export default function Corpo({ children }: Homeprops) {
    const router = useRouter()

    return (
        <div className="bg-white w-full flex flex-col rounded-t-xl p-3 absolute -mt-[9px]">
            <Progress />
            <div className="flex flex-col justify-between">
                <div className="mt-2">{children}</div>
            </div>
        </div>
    )
}
