import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { AttachFile } from '@mui/icons-material'

const FilePreview = ({ fileData }) => {
  return (
    <div className="flex">
      <div className="flex-col items-center w-full grid gap-3">
        {/* faz um loop sobre o fileData */}
        {fileData.fileList.map((f) => {
          return (
            <>
              <ol>
                <li key={f.lastModified} className="flex">
                  {/* exiba o nome do arquivo e digite */}
                  <div
                    key={f.name}
                    className="border border-[#636363] justify-between text-[#636363] font-medium rounded-lg w-full flex items-center"
                  >
                    <div className="flex p-2">
                      <div className="h-2 w-2 text-Loja flex justify-center items-center">
                        <AttachFile />
                      </div>
                      {f.name}
                    </div>
                    <div className="p-2">
                      <div className="h-4 w-4 text-red-600 flex justify-center items-center">
                        <CloseIcon />
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default FilePreview
