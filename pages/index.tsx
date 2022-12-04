import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './footer'

export default function Home() {
  return (
    <div className={styles.container + " " + styles.fadein}>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="My website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.large}>
          Welcome
        </h1>
        <p className={styles.subtext}>Enter your name to get started</p>
        <form className={styles.form} method="post" action='/about'>
          <input type="text" placeholder="Whats you're name?" className={styles.formInput}></input>
          <button type="submit" className={styles.submit}>&gt;</button>
        </form>
      </main>
      <Footer/>
    </div>
  )
}
