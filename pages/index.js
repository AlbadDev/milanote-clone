import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import BodyFirstComponent from '../Components/BodyFirstComponent'
import BodySecondComponent from '../Components/BodySecondComponent'
import OrganizeVisuallyComponent from '../Components/OrganizeVisuallyComponent'
import CollaborateTeamComponent from '../Components/CollaborateTeamComponent'
import SegmentCorouselSlice from '../Components/SegmentCorouselSlice'
import TestimonialSlice from '../Components/TestimonialSlice'
import CompanySectionSlice from '../Components/CompanySectionSlice'
import RegistrationForm from '../Components/RegistrationForm'
import RegisterFormFooter from '../Components/RegisterFormFooter'











export default function Home({resultData , testimonialResult, responseCompanyData}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Milanote-Clone</title>
                <meta name="description" content="A perfect clone of Milanote web site build with Nextjs by AlbadDev" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="true"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
            </Head>
          

          <Navbar />
          <main className={styles.main}>
            <BodyFirstComponent />
            <BodySecondComponent />
            <OrganizeVisuallyComponent />
            <CollaborateTeamComponent />
            <SegmentCorouselSlice resultData = {resultData}/>
            {/* <TestimonialSlice testimonialResult = {testimonialResult}/> */}
            <CompanySectionSlice  responseCompanyData = {responseCompanyData}/>
            {/* <RegistrationForm /> */}
            {/* <RegisterFormFooter /> */}
          </main>

          {/* <footer className={styles.footer}>

              Powered by AlbadDev {' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>

          </footer> */}
      </div>
    )
}





// Fetch data from our fake server build with json and getStaticProps

export const getStaticProps = async () => {
  const requestData = await fetch('http://localhost:3000/api/corouselData')
  const resultData = await requestData.json()
  const testimonialRequest = await fetch('http://localhost:3000/api/testimonialData')
  const testimonialResult = await testimonialRequest.json()
  const requestCompanyData = await fetch('http://localhost:3000/api/companyData')
  const responseCompanyData = await requestCompanyData.json()

  return {
    props: {
      resultData,
      testimonialResult,
      responseCompanyData
    }
  }
}