import React from 'react'
import Image from 'next/image'

const FilePreview = ({ fileData }) => {
  return (
    <div className="flex">
      <div className="flex-col items-center w-full grid gap-3">
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
            <>
              <ol>
                <li key={f.lastModified} className="flex">
                  {/* display the filename and type */}
                  <div
                    key={f.name}
                    className="border border-[#636363] text-[#636363] font-medium rounded-lg w-full flex items-center"
                  >
                    <Image
                      src="/Attachfile.svg"
                      alt="upload"
                      height={20}
                      width={20}
                    />
                    <div className="h-10 flex items-center">{f.name}</div>
                    {/* <Button size="small" onClick={() => onDelete(f.name)}>
                      Delete
                    </Button> */}
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
