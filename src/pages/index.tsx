import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,300;1,700&family=Press+Start+2P&display=swap" rel="stylesheet"/> 
      </Head>
      <ExperienceBar />
    </div>
    
  )
}
