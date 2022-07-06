import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'

interface ProgressProps {
  value: string
}

export default function Progress({ value }: ProgressProps) {
  const router = useRouter()

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <button onClick={() => router.back()}>
          <ArrowBackIcon></ArrowBackIcon>
        </button>
        <progress
          className="progress progress-primary duration-700 ml-3 w-full bg-[rgba(0, 0, 0, 0.1)]"
          value={value}
          max="100"
        ></progress>
      </div>
    </>
  )
}
