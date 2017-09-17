import { setStatic } from 'recompose'
import { GetInitialPropsFunction } from 'next-extensions'

export const setGetInitialProps = (getInitialProps: GetInitialPropsFunction) =>
  setStatic('getInitialProps', getInitialProps)
