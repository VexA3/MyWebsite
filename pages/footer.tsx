import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return <footer className={styles.footer}>
    <div className={styles.footerDiv}>
      <a className={styles.a} href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
        Powered by {' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
        | © Billy 2022
      </a>
    </div>
</footer>
}