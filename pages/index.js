import Head from 'next/head'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <Head>
        <title>Augusto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Capture Photography' message='I capture moments in nature and keep the alive.'/>
    </div>
  )
}
