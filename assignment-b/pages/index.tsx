import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'
import ImageUrlSubmitForm from '../components/ImageUrlSubmitForm'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Assignment B</title>
      </Head>
      <h1>Image URL Analyzer</h1>
      <ImageUrlSubmitForm />
    </Fragment>
  )
}

export default Home
