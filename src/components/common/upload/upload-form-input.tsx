'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

type UploadInputProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  disabled?: boolean
  loading?: boolean
}

const UploadFormInput: React.FC<UploadInputProps> = ({
  onSubmit,
  disabled = false,
  loading = false,
}) => {
  return (
    <form className='flex flex-col gap-6' onSubmit={onSubmit}>
      <Input
        id='file'
        name='file'
        type='file'
        required
        accept='application/pdf'
        disabled={disabled}
      />
      <Button type='submit' disabled={disabled}>
        {loading ? 'please wait...' : 'Upload PDF'}
      </Button>
    </form>
  )
}

export default UploadFormInput
