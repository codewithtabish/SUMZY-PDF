// import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// interface OpenAIError extends Error {
//   status?: number;
//   code?: string;
// }

// export async function generateSummaryFromOpenAI(pdfText: string): Promise<string> {
//   try {
//     const completion = await openai.chat.completions.create({
//       model: 'gpt-4',
//       messages: [
//         { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
//         { role: 'user',  
//             content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,

//          },
//       ],
//       temperature: 0.7,
//       max_tokens: 1500,
//     });

//     return completion.choices[0].message.content ?? '';
//   } catch (err) {
//     const error = err as OpenAIError;

//     if (error.status === 429) {
//       throw new Error('RATE_LIMIT_EXCEEDED: Too many requests, please try again later.');
//     }

//     if (error.status === 401) {
//       throw new Error('UNAUTHORIZED: Invalid API key or unauthorized access.');
//     }

//     if (error.status === 400) {
//       throw new Error('BAD_REQUEST: The request was malformed or missing required fields.');
//     }

//     if (error.status === 500) {
//       throw new Error('INTERNAL_SERVER_ERROR: OpenAI server encountered an error.');
//     }

//     if (error.code === 'ENOTFOUND') {
//       throw new Error('NETWORK_ERROR: Could not reach OpenAI servers. Check your connection.');
//     }

//     throw new Error(`UNKNOWN_ERROR: ${error.message || 'Something went wrong.'}`);
//   }
// }



// again 

import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

interface OpenAIError extends Error {
  status?: number;
  code?: string;
}

export async function generateSummaryFromOpenAI(pdfText: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-1106-preview', // Supports up to 128K tokens in newer versions (June 2024)
      messages: [
        { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 3000, // Increase output size
    });

    return completion.choices[0].message.content ?? '';
  } catch (err) {
    const error = err as OpenAIError;

    if (error.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED: Too many requests, please try again later.');
    }

    if (error.status === 401) {
      throw new Error('UNAUTHORIZED: Invalid API key or unauthorized access.');
    }

    if (error.status === 400) {
      throw new Error('BAD_REQUEST: The request was malformed or missing required fields.');
    }

    if (error.status === 500) {
      throw new Error('INTERNAL_SERVER_ERROR: OpenAI server encountered an error.');
    }

    if (error.code === 'ENOTFOUND') {
      throw new Error('NETWORK_ERROR: Could not reach OpenAI servers. Check your connection.');
    }

    throw new Error(`UNKNOWN_ERROR: ${error.message || 'Something went wrong.'}`);
  }
}
