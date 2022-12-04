import Head from 'next/head'
import styles from '../styles/About.module.css'
import Footer from './footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="My website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>My name is Billy, I am a web developer</h2>
      </main>
      <Footer/>
    </div>
  )
}
