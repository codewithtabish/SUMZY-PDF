'use client'

import React, { useState } from 'react'
import UploadFormInput from './upload-form-input'
import { z } from 'zod'
import { useUploadThing } from '@/utils/uploadthing'
import { toast } from 'sonner'
import { generatePdfSummary } from '@/actions/upload-action'

const MAX_FILE_SIZE_MB = 24
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024

const schema = z.object({
  file: z
    .instanceof(File, { message: 'Invalid file' })
    .refine(file => file.size <= MAX_FILE_SIZE_BYTES, {
      message: `File size must not exceed ${MAX_FILE_SIZE_MB}MB`,
    })
    .refine(file => file.type.startsWith('application/pdf'), {
      message: 'File must be a PDF',
    }),
})

// ✅ Define expected response structure
type UploadResponseItem = {
  serverData: {
    userId: string
    fileUrl: string
    fileName: string
  }
}

const UploadForm: React.FC = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const { startUpload } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      toast.success('Upload complete', {
        description: 'Your file has been uploaded successfully.',
      })
      setIsUploading(false)

      // Reset the form
      const form = document.querySelector('form') as HTMLFormElement | null
      form?.reset()
    },
    onUploadBegin: () => {
      toast.info('Upload started', {
        description: 'Uploading file. Please wait...',
      })
    },
    onUploadError: (error?: Error) => {
      toast.error('Upload failed', {
        description: error?.message ?? 'Something went wrong.',
      })
      setIsUploading(false)
    },
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const file = formData.get('file')

    if (!(file instanceof File)) {
      toast.error('Validation Error', {
        description: 'No file selected or invalid file.',
      })
      return
    }

    const validatedFields = schema.safeParse({ file })

    if (!validatedFields.success) {
      toast.error('Validation Error', {
        description:
          validatedFields.error.flatten().fieldErrors?.file?.[0] ?? 'Invalid file.',
      })
      return
    }

    setIsUploading(true)

    try {
      const uploadResponse = await startUpload([file])

      if (!uploadResponse || uploadResponse.length === 0) {
        toast.error('Upload failed', {
          description: 'No response from upload server.',
        })
        setIsUploading(false)
        return
      }

      // ✅ Cast to expected type
      const typedUploadResponse = uploadResponse as UploadResponseItem[]

      const pdfSummary = await generatePdfSummary(typedUploadResponse)
      alert('The pdf summary is '+pdfSummary.data?.parsedText.toString())

      console.log('PDF Summary:', pdfSummary)
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : 'Something went wrong.'
      toast.error('Unexpected error', {
        description: errMsg,
      })
      setIsUploading(false)
    }
  }

  return (
    <div className='md:max-w-3xl mx-auto'>
      <UploadFormInput
        onSubmit={handleSubmit}
        disabled={isUploading}
        loading={isUploading}
      />
    </div>
  )
}

export default UploadForm






















