import { useRouter } from 'next/router'
import { useReducer } from 'react'
// import Button from './components/Button'
import Progress from './components/Progress'
import DropZone from '../utils/dropzone'
// import MultipleFileUploadField from './MultipleFileUpload'

import { Button, Card, CardContent, Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import { array, object, string } from 'yup'

export default function sendfile() {
  // reducer function to handle state changes
  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone }
      case 'ADD_FILE_TO_LIST':
        return { ...state, fileList: state.fileList.concat(action.files) }
      default:
        return state
    }
  }

  // destructuring state and dispatch, initializing fileList to empty array
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  })

  const router = useRouter()

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

        {/* <Card>
          <CardContent>
            <Formik
              initialValues={{ files: [] }}
              validationSchema={object({
                files: array(
                  object({
                    url: string().required(),
                  })
                ),
              })}
              onSubmit={(values) => {
                console.log('values', values)
                return new Promise((res) => setTimeout(res, 2000))
              }}
            >
              {({ values, errors, isValid, isSubmitting }) => (
                <Form>
                  <Grid container spacing={2} direction="column">
                    <MultipleFileUploadField name="files" />

                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={!isValid || isSubmitting}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>

                  <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card> */}
      </div>
    </>
  )
}
