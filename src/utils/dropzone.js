import { useState, useRouter } from 'react'
import FilePreview from './filepreview'
import Button from '../components/Button'
import toast from 'react-hot-toast'

const DropZone = ({ data, dispatch }) => {
  // onDragEnter define inDropZone como true
  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }

  // onDragLeave define inDropZone como false
  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  }

  // onDragOver define inDropZone como true
  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // define dropEffect para copiar, ou seja, cópia do item de origem
    e.dataTransfer.dropEffect = 'copy'
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }

  // onDrop define inDropZone como false e adiciona arquivos a fileList
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // obtém os arquivos do evento no objeto dataTransfer como um array
    let files = [...e.dataTransfer.files]

    // assegura que um arquivo ou arquivos sejam descartados
    if (files && files.length > 0) {
      // faz um loop sobre os arquivos existentes
      const existingFiles = data.fileList.map((f) => f.name)
      // verifica se o arquivo já existe, se sim, não adiciona a fileList
      // isso é para evitar duplicatas
      files = files.filter((f) => !existingFiles.includes(f.name))

      // despacha ação para adicionar arquivo ou arquivos descartados a fileList
      dispatch({ type: 'ADD_FILE_TO_LIST', files })
      // redefine inDropZone para false
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    }
  }

  // trata a seleção do arquivo via elemento de entrada
  const handleFileSelect = (e) => {
    // obtém os arquivos do evento no elemento de entrada como um array
    let files = [...e.target.files]

    // assegura que um arquivo ou arquivos estejam selecionados
    if (files && files.length > 0) {
      // faz um loop sobre os arquivos existentes
      const existingFiles = data.fileList.map((f) => f.name)
      // verifica se o arquivo já existe, se sim, não adiciona a fileList
      // isso é para evitar duplicatas
      files = files.filter((f) => !existingFiles.includes(f.name))

      // despacha ação para adicionar arquivo ou arquivos selecionados a fileList
      dispatch({ type: 'ADD_FILE_TO_LIST', files })
    }
  }

  // para lidar com uploads de arquivos
  const uploadFiles = async () => {
    // obtém os arquivos da fileList como um array
    var files = data.fileList
    // inicializa o objeto formData
    var formData = new FormData()
    // faz um loop sobre os arquivos e adiciona ao formData
    files.forEach((file) => formData.append('files', file))

    // Carregue os arquivos como uma solicitação POST para o servidor usando fetch
    const response = await fetch('/api/fileupload', {
      method: 'POST',
      body: formData,
    })

    //upload de arquivo bem sucedido
    if (response.ok) {
      toast.success('sucess') //toast para teste

      const data = {
        adress: localStorage.getItem('adress'),
        number: localStorage.getItem('number'),
        city: localStorage.getItem('city'),
        district: localStorage.getItem('district'),
        postal: localStorage.getItem('postal'),
        state: localStorage.getItem('state'),
        cnpj: localStorage.getItem('cnpj'),
        companyname: localStorage.getItem('companyname'),
        mean: localStorage.getItem('mean'),
        complemento: localStorage.getItem('complemento'),
      }

      //criando data para teste enviar dados para o BD

      localStorage.clear()
      window.location.replace('/business-register/conclusion')
    } else {
      // upload de arquivo sem sucesso
      //exibir erro // apagar abaixo
      toast.error('error') //toast para teste

      const data = {
        adress: localStorage.getItem('adress'),
        number: localStorage.getItem('number'),
        city: localStorage.getItem('city'),
        district: localStorage.getItem('district'),
        postal: localStorage.getItem('postal'),
        state: localStorage.getItem('state'),
        cnpj: localStorage.getItem('cnpj'),
        companyname: localStorage.getItem('companyname'),
        mean: localStorage.getItem('mean'),
        complemento: localStorage.getItem('complemento'),
      }

      //criando data para teste

      localStorage.clear()
      window.location.replace('/business-register/conclusion')
    }
  }

  const removeItems = () => {
    let files = data.fileList
    var remove = files.splice(0)
    console.log(remove)
  }

  return (
    <>
      <div
        className="flex flex-col items-center gap-2"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <input
          id="fileSelect"
          type="file"
          multiple
          className="w-0 h-[1px]"
          onChange={(e) => handleFileSelect(e)}
        />

        <label
          className="btn btn-success bg-transparent w-full text-Loja hover:bg-white hover:border-Loja border border-Loja"
          htmlFor="fileSelect"
        >
          Clique para enviar os arquivos
        </label>
        <h1>Ou arraste aqui!</h1>
      </div>

      {/* Passe os arquivos selecionados ou descartados como props */}
      <FilePreview fileData={data} />

      {data.fileList.length == 0 && (
        <button className="btn btn-disabled w-full" type="submit">
          Próximo
        </button>
      )}

      {data.fileList.length > 0 && (
        <div onClick={uploadFiles}>
          <Button />
        </div>
      )}
    </>
  )
}

export default DropZone
