import React from 'react'
import { Button } from '../ui/button'

const CallToAction = () => {
  return (
<section className="py-8 ">
  <div className="container mx-auto flex flex-col items-center justify-center px-6 space-y-8 md:px-16 lg:px-32">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center">
      Summarize smarter with AI
    </h1>
    <p className="max-w-3xl text-center text-lg md:text-xl font-medium text-gray-600">
      Join thousands using our AI-powered summarizer to save time and get concise, accurate summaries instantly.
    </p>
    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
      <Button className="px-10 py-5 cursor-pointer ">
        Get Started Free
      </Button>
      <Button variant={'outline'} className="px-10 py-5 cursor-pointer" >
        Learn More
      </Button>
    </div>
  </div>
</section>
  
  )
}

export default CallToAction
