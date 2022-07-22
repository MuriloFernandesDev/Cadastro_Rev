import { useReducer } from 'react'
import Progress from '../../components/Progress'
import DropZone from '../../utils/dropzone'

export default function sendfile() {
  // função redutora para lidar com mudanças de estado
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone }
      case 'ADD_FILE_TO_LIST':
        return { ...state, fileList: state.fileList.concat(action.files) }
      default:
        return state
    }
  }

  // desestruturando o estado e despachando, inicializando fileList para um array vazio
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  })

  return (
    <>
      <Progress value="90" />
      <div className="grid gap-8 mt-8">
        <div>
          <h1 className="text-black text-xl font-semibold">
            Envie os documentos para validação
          </h1>
          <ul className="text-Loja opacity-50 text-sm mt-2 grid gap-2">
            <li>1. Contrato social da empresa</li>
            <li>2. Sua CNH ou documento com foto que conste RG e CPF </li>
            <li>3. Comprovante de endereço</li>
          </ul>
        </div>
        <DropZone data={data} dispatch={dispatch} />
      </div>
    </>
  )
}
