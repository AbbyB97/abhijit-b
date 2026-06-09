import type { NextPage } from "next"
import HomeModule from "modules/home"
import Head from "next/head"
import profileData from "static/portfolioProfile"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${profileData.name} | ${profileData.title}`}</title>
        <meta property="og:title" content={`${profileData.name} | ${profileData.title}`} />
        <meta name="description" content={profileData.subtitle} />
        <meta property="og:description" content={profileData.about} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/avatar_ab_mini.jpg" />
        <meta property="og:url" content="https://abhijit-b.vercel.app/" />
      </Head>
      <HomeModule />
    </>
  )
}

export default Home
