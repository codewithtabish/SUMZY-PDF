import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'
import React from 'react'

const UploadTopHeader = () => {
  return (
    <div className='flex flex-col items-center space-y-6 justify-center'>
      <Badge className='self-center border-2 border-primary px-3 max-w-[200px] min-w-[200px]' variant={'outline'}>
        <Sparkles className='text-primary' />
        <span className='text-primary'>AI POWERED SUMMARY TOOL</span>
      </Badge>

      <h2 className='text-2xl font-bold text-center'>
        Upload Your <span className='bg-primary text-white rounded-md px-3 -rotate-3 text-sm inline-block'>PDFs</span> and Get Instant Summaries
      </h2>

      <p className='text-muted-foreground text-center max-w-xl'>
        Effortlessly turn lengthy documents into clear, concise summaries with the power of AI. Just upload your PDF to get started.
      </p>
    </div>
  )
}

export default UploadTopHeader
