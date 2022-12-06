import Head from 'next/head'
import styles from '../styles/About.module.css'
import Footer from './footer'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="My website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.aboutDiv}>
          <h2 className={styles.h2}>My name is Billy</h2>
          <h3 className={styles.h3}>This is my website</h3>
          <h3 className={styles.h3}>Its currently a work in progress.</h3>
          <p className={styles.p}>Please come back at a later time to see what I've got planned.</p>
          {/* <p className={styles.p}>Your name was  right?</p> */}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
