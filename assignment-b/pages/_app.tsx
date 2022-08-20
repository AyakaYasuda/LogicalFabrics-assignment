import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnalyzedDataProvider } from './context/analyzed-data-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnalyzedDataProvider>
      <Component {...pageProps} />
    </AnalyzedDataProvider>
  )
}

export default MyApp
