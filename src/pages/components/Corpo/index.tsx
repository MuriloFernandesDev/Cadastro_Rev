import { useRouter } from 'next/router'
import { ReactChild, ReactChildren } from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { ReactElement, cloneElement } from 'react'
import Progress from '../Progress'
import Button from '../Button'

interface Homeprops {
    children: ReactElement
}

export default function Corpo({ children }: Homeprops) {
    const router = useRouter()
    return (
        <div className="bg-white w-full flex flex-col rounded-t-xl p-3 absolute -mt-[9px]">
            <Progress />
            <div className="flex flex-col justify-between min-h-[100vw]">
                <div className="mt-2">{children}</div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
    )
}
