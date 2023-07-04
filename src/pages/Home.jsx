import React from 'react'
import FirstScroll from '../components/FirstScroll'
import Information from '../components/Information'
import Hero from '../components/Hero'
import FemaleSection from '../components/FemaleSection'
import ComboSet from '../components/ComboSet'


const Home = () => {
  return (
    <div>
      <FirstScroll/>
      <Information/>
      <Hero/>
      <FemaleSection/>
      <ComboSet/>
    </div>
  )
}

export default Home