import React from 'react'
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Partners,
} from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Partners />
      <Contact />
    </main>
  )
}

export default HomePage
