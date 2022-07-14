import { useState } from 'react'
import FilePreview from './filepreview'
import Button from '../pages/components/Button'

const DropZone = ({ data, dispatch }) => {
  // onDragEnter sets inDropZone to true
  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  }

  // onDragOver sets inDropZone to true
  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // set dropEffect to copy i.e copy of the source item
    e.dataTransfer.dropEffect = 'copy'
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
  }

  // onDrop sets inDropZone to false and adds files to fileList
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // get files from event on the dataTransfer object as an array
    let files = [...e.dataTransfer.files]

    // ensure a file or files are dropped
    if (files && files.length > 0) {
      // loop over existing files
      const existingFiles = data.fileList.map((f) => f.name)
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      files = files.filter((f) => !existingFiles.includes(f.name))

      // dispatch action to add droped file or files to fileList
      dispatch({ type: 'ADD_FILE_TO_LIST', files })
      // reset inDropZone to false
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    }
  }

  // handle file selection via input element
  const handleFileSelect = (e) => {
    // get files from event on the input element as an array
    let files = [...e.target.files]

    // ensure a file or files are selected
    if (files && files.length > 0) {
      // loop over existing files
      const existingFiles = data.fileList.map((f) => f.name)
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      files = files.filter((f) => !existingFiles.includes(f.name))

      // dispatch action to add selected file or files to fileList
      dispatch({ type: 'ADD_FILE_TO_LIST', files })
    }
  }

  // to handle file uploads
  const uploadFiles = async () => {
    // get the files from the fileList as an array
    let files = data.fileList
    // initialize formData object
    const formData = new FormData()
    // loop over files and add to formData
    files.forEach((file) => formData.append('files', file))

    // Upload the files as a POST request to the server using fetch
    // Note: /api/fileupload is not a real endpoint, it is just an example
    const response = await fetch('/api/fileupload', {
      method: 'POST',
      body: formData,
    })

    //successful file upload
    if (response.ok) {
      alert('Files uploaded successfully')
    } else {
      // unsuccessful file upload
      alert('Error uploading files')
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
      {/* Pass the selectect or dropped files as props */}
      <FilePreview fileData={data} />
      {/* Only show upload button after selecting atleast 1 file */}

      <div onClick={uploadFiles}>
        <Button />
      </div>
      <div onClick={removeItems}>
        <Button />
      </div>
    </>
  )
}

export default DropZone
