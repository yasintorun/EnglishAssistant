import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {GetStaticProps} from 'next'
import { getRandomVocabulary } from '../api/controllers/vocabularyController'
import { Vocabulary } from '../models/vocabulary'
const inter = Inter({ subsets: ['latin'] })

export type HomeProps = {
  vocabulary: Vocabulary
}

export default function Home({vocabulary}: HomeProps) {
  return (
    <>
      <Head>
        <title>{vocabulary.english} - Random Vocabulary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.english}>{vocabulary.english}</h1>
            <div className={styles.sentence}>
              <label>Example</label>
              <p>{vocabulary.sentence}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const vocabulary = await getRandomVocabulary();
  console.log("TEST: ", vocabulary)
  
  return {
    props: {
      vocabulary
    },
  };
};