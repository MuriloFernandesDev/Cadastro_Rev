import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function Progress() {
    return (
        <div className="flex w-full items-center justify-between">
            <Link href={'/'}>
                <a>
                    <ArrowBackIcon></ArrowBackIcon>
                </a>
            </Link>
            <progress
                className="progress progress-primary ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
                value="30"
                max="100"
            ></progress>
        </div>
    )
}
