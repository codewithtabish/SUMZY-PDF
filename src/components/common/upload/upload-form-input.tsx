'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
type UploadInputProps={
    onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}

const UploadFormInput = ({onSubmit}:UploadInputProps) => {
  return (
       <form className='flex flex-col gap-6' onSubmit={onSubmit}>
        <Input id='file' name='file' type='file' required accept='application/pdf'/>
            <Button>
                Upload Pdf
            </Button>
        </form>
  )
}

export default UploadFormInput
