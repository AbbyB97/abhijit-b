import type { NextPage } from "next"
import HomeModule from "modules/home"
import Head from "next/head"
import profileData from "static/portfolioProfile"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{profileData.name}</title>
        <meta property="og:title" content={`${profileData.name}`} />
        <meta
          name="description"
          content={`${profileData.header.lineOne} ${profileData.header.lineTwo}`}
        />
        <meta
          property="og:description"
          content={`${profileData.header.lineOne} ${profileData.header.lineTwo}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/avatar_ab_mini.jpg" />
        <meta property="og:url" content="https://abhijit-b.vercel.app/" />
      </Head>
      <HomeModule />
    </>
  )
}

export default Home
