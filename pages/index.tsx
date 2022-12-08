import { NextPage } from 'next'

import { MainLayout } from 'layouts'
import { HomeScreen } from 'screens'

const Home: NextPage = () => {
  return (
    <MainLayout title='Home'>
      <HomeScreen />
    </MainLayout>
  )
}

export default Home
