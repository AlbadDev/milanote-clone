import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import BodyFirstComponent from '../Components/BodyFirstComponent'
import BodySecondComponent from '../Components/BodySecondComponent'
import OrganizeVisuallyComponent from '../Components/OrganizeVisuallyComponent'




export default function Home() {
  return (
      <div className={styles.container}>
              <Head>
                <title>Milanote-Clone</title>
                <meta name="description" content="A perfect clone of Milanote web site build with Nextjs by AlbadDev" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Neuton:wght@700&display=swap"  />
              </Head>
          

          <Navbar />
          <main className={styles.main}>
            <BodyFirstComponent />
            <BodySecondComponent />
            <OrganizeVisuallyComponent />
          </main>

          <footer className={styles.footer}>

              Powered by AlbadDev {' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>

          </footer>
      </div>
  )
}
