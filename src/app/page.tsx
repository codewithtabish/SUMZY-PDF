import CallToAction from '@/components/common/call-to-action'
import FAQ from '@/components/common/faq'
import FeatureSection from '@/components/common/feature'
import Footer from '@/components/common/footer'
import HeroSection from '@/components/common/hero-section'
import HowItWork from '@/components/common/how-it-work'
import Pricing from '@/components/common/pricing'
import Testimonials from '@/components/common/testmonial'
import React from 'react'

const HomePage = () => {
  return (
    <main className="pt-24 space-y-24">
      <HeroSection/> 
     <HowItWork/>
     
     <FeatureSection/>
     <CallToAction/>
     <Testimonials/>
     <FAQ/>
     <Pricing/>
     <Footer/>
    </main>
  )
}

export default HomePage
