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

      <CheckIcon
        sx={{ fontSize: 15 }}
        className="hidden absolute ml-3  text-white peer-checked:z-20 peer-checked:flex mt-[0.35rem]"
      />
      <label
        className="flex px-3 py-1 bg-white border z-10  transition delay-[70ms] border-gray-300 rounded-2xl text-2xs w-full cursor-pointer peer-checked:pl-[2rem] focus:outline-none hover:bg-gray-50 peer-checked:bg-Loja peer-checked:text-white peer-checked:border-transparent"
        htmlFor={value2}
      >
        {value}
      </label>
    </div>
  )
}
