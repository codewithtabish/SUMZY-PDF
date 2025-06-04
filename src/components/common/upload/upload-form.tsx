'use client'
import React from 'react'
import UploadFormInput from './upload-form-input'



const UploadForm = () => {
    const handleSubmit=async()=>{

    }
  return (
    <div className='md:max-w-3xl  mx-auto'>
        <UploadFormInput onSubmit={handleSubmit}/>
       
      
    </div>
  )
}

export default UploadForm
