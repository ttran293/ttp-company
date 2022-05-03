import React from 'react'
import {
  FeaturedProducts,
  Hero,
  Services,
  Hero2,
  Hero3,
  Partners,
  FAQ,
} from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Hero3 />
      <Hero2 />
      <FeaturedProducts />
      <Services />
      <Partners />
      <FAQ />
    </main>
  );
}

export default HomePage
