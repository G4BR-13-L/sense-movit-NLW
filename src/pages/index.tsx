import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdowm } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';



import styles from '../styles/pages/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início - Sense Movit</title>
      </Head>

      <ExperienceBar/>

      <section>
        <div>
          <Profile/>

          <CompletedChallenges/>
          <Countdowm/>
        </div>
        <div></div>
      </section>
    </div>
    
  )
}
