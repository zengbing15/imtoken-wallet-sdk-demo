import type { NextPage } from 'next'
import Head from 'next/head'
import Navigator from 'components/navigator'
import Device from 'components/device'
import Native from 'components/native'
import User from 'components/user'
import Layout from 'components/layout'
import General from 'components/general'
import Internal from 'components/internal'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Imtoken Sdk Demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <main>
        <Navigator />
        <Device />
        <Layout />
        <Native />
        <User />
        <Internal />
        <General />
      </main>
    </>
  )
}

export default Home
