import Link from 'next/link'
export default function Progress() {
    return (
        <div className="flex w-full items-center justify-between">
            <Link href={'/Welcome'}>
                <a>
                    <img src="/back.png" alt="" />
                </a>
            </Link>
            <progress
                className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                value="20"
                max="100"
            ></progress>
        </div>
    )
}
