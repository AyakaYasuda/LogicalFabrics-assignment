import React, { useContext, useState } from 'react'
import { analyzedDataCtx } from '../pages/context/analyzed-data-context'
import axios from 'axios'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT

const ImageUrlSubmitForm = () => {
  const { dispatch } = useContext(analyzedDataCtx)
  const [inputUrl, setInputUrl] = useState<string>()
  const [analyzing, setAnalyzing] = useState<boolean>()

  const inputUrlHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputUrl(e.target.value)
  }

  const submitFormHandler = () => {
    setAnalyzing(true)

    axios.get(`${baseUrl}<${inputUrl}>`).then((response) => {
      console.log(response.data)
      dispatch({ type: 'fetch', payload: response.data })
      setAnalyzing(false)
    })
  }

  return (
    <>
      <TextField id='image-url' label='Image URL' onChange={inputUrlHandler} />
      <Button
        variant='contained'
        disabled={analyzing}
        onClick={submitFormHandler}>
        {analyzing ? 'ANALYZING...' : 'ANALYZE'}
      </Button>
    </>
  )
}

export default ImageUrlSubmitForm
