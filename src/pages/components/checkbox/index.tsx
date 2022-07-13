import CheckIcon from '@mui/icons-material/Check'

interface Check {
  value: string
  value2: string
}

export default function Checkbox({ value, value2 }: Check) {
  return (
    <div className="flex w-max relative">
      <input
        className="sr-only peer"
        type="checkbox"
        value="yes"
        name="answer"
        id={value2}
        placeholder="Vanilla"
      />

      <CheckIcon className="hidden absolute ml-3 w-6 h-6 text-white peer-checked:flex mt-[0.5rem]" />
      <label
        className="flex p-2 bg-white border border-gray-300 rounded-2xl w-full cursor-pointer peer-checked:pl-[2.4rem] focus:outline-none hover:bg-gray-50 peer-checked:bg-Loja peer-checked:text-white peer-checked:border-transparent"
        htmlFor={value2}
      >
        {value}
      </label>
    </div>
  )
}
