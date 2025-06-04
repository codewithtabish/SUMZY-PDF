import UploadForm from '@/components/common/upload/upload-form'
import UploadTopHeader from '@/components/common/upload/upload-top-header'
import React from 'react'

const UploadPage = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto'>
      <div className='flex pt-28 flex-col space-y-24'>
      <UploadTopHeader/>
      <UploadForm/>

      </div>
      
      
    </div>
  )
}

export default UploadPage
