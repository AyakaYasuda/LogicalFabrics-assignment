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
      <h1>Image URL Analyzer</h1>
      <ImageUrlSubmitForm />
      <AnalysisResult />
    </Fragment>
  )
}

export default Home
