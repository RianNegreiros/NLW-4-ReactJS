import  Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import '../styles/components/ExperienceBar.module.css';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Inicio | Move It</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}