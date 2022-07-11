// import CheckIcon from '@mui/icons-material/Check'

// interface Check {
//   value: string
//   value2: string
// }

// export default function Checkbox({ value, value2 }: Check) {
//   return (
//     <div className="flex w-max">
//       <input
//         className="sr-only peer"
//         type="checkbox"
//         value="yes"
//         name="answer"
//         id={value2}
//       />

//       <label
//         className="flex p-2 bg-white border border-gray-300 rounded-2xl w-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-Loja peer-checked:text-white peer-checked:border-transparent"
//         htmlFor={value2}
//       >
//         {value}
//       </label>

//       <CheckIcon className="hidden w-5 h-5 text-white peer-checked:flex -ml-10 mt-3" />
//     </div>
//   )
// }

import CheckIcon from '@mui/icons-material/Check'

interface Check {
  value: string
  value2: string
}

export default function Checkbox({ value, value2 }: Check) {
  return (
    <div className="flex w-max">
      <input
        type="checkbox"
        value="yes"
        name="answer"
        id={value2}
        placeholder="Vanilla"
      />

      <label
        className="flex p-2 bg-white border border-gray-300 rounded-2xl w-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-Loja peer-checked:text-white peer-checked:border-transparent"
        htmlFor={value2}
      >
        {value}
      </label>

      <CheckIcon className="hidden w-5 h-5 text-white peer-checked:flex -ml-10 mt-3" />
    </div>
  )
}
