import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html className='' lang='en'>
        <Head />
        <body className='font-body bg-gray-100 transition duration-1000 dark:bg-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument