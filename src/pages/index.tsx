import Head from 'next/head';
import React from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdowm } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';



import styles from '../styles/pages/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início - Sense Movit</title>
      </Head>

      <ExperienceBar/>
      <CountdownProvider>
        <section>
          <div>
            <Profile/>

            <CompletedChallenges/>
            <Countdowm/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
      </div>
    
  )
}
