import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'

const Home = () => {
  return (
    <>
     <div className='m-0
        bg-blueblack 
        flex flex-col justify-center items-center 
        pb-20'
        style={{
          backgroundImage : 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent'
        }}
      > 
        <Navigation/>
        <Hero/>
      </div>
    </>
  )
}

export default Home