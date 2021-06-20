import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function Home() {
  const width = 500;
  const height = 500;

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Muhammad Zhuhry</title>
      </Head>
      <Navbar />
      <Header width={width} height={height} />
    </>
  )
}
