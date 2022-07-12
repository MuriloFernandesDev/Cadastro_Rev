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
    <div className="flex w-max relative">
      <input
        className="sr-only peer"
        type="checkbox"
        value="yes"
        name="answer"
        id={value2}
      />
      <CheckIcon className="hidden absolute ml-3 w-4 h-4 text-white peer-checked:flex mt-[0.5rem]" />
      <label
        className="flex px-[1.3rem] py-4 bg-white transition delay-[100ms] border leading-[0.5px] border-gray-300 rounded-full text-xs w-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-Loja peer-checked:pl-8  peer-checked:text-white peer-checked:border-transparent"
        htmlFor={value2}
      >
        {value}
      </label>
    </div>
  )
}
