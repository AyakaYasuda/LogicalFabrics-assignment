import React, { useContext, useState } from 'react'
import { analyzedDataCtx } from '../pages/context/analyzed-data-context'
import axios from 'axios'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FindInPageIcon from '@mui/icons-material/FindInPage'

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

    axios
      .get(`${baseUrl}${inputUrl}`)
      .then((response) => {
        dispatch({ type: 'fetch', payload: response.data })
        setAnalyzing(false)
        setInputUrl('')
      })
      .catch((err) => {
        setAnalyzing(false)
      })
  }

  return (
    <div className='flex items-center justify-center gap-x-4'>
      <TextField
        required
        id='image-url'
        label='Image URL'
        value={inputUrl}
        onChange={inputUrlHandler}
        InputLabelProps={{ shrink: true }}
        sx={{
          width: 300,
          '& .MuiFormLabel-root': {
            fontSize: 16,
          },
          '& .MuiInputBase-root': {
            height: 45,
          },
        }}
      />
      <Button
        variant='contained'
        size='large'
        color='primary'
        disabled={analyzing || !inputUrl}
        onClick={submitFormHandler}>
        <>
          <FindInPageIcon sx={{ marginRight: '2px' }} />
          {analyzing ? 'ANALYZING...' : 'ANALYZE'}
        </>
      </Button>
    </div>
  )
}

export default ImageUrlSubmitForm
