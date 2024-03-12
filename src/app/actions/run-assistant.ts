'use server'

import OpenAI from 'openai'
import { cookies } from 'next/headers'
import { type RunAction } from '../lib/types'

const assistantID = 'asst_4Gvk7WJuvcSqPuzUciiGSw8j'

export default async function runAssistant (): Promise<RunAction> {
  const openai = new OpenAI({apiKey: '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'})

  const threadId = cookies().get('threads')?.value

  if (!threadId) {
    return { run: null, error: 'No thread found, please try again later' }
  }

  const run = await openai.beta.threads.runs.create(
    threadId,
    {
      assistant_id: assistantID
    }
  )

  return { run, error: null }
}
