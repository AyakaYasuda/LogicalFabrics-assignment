import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'

import ImageUrlSubmitForm from '../components/ImageUrlSubmitForm'
import AnalysisResult from '../components/AnalysisResult'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Assignment B</title>
      </Head>
      <div className='container mx-auto p-5 text-center'>
        <h1 className='my-5'>Image URL Analyzer</h1>
        <ImageUrlSubmitForm />
        <AnalysisResult />
      </div>
    </Fragment>
  )
}

export default Home
