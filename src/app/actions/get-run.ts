'use server'

import OpenAI from 'openai'
import { cookies } from 'next/headers'
import { type RunAction } from '../lib/types'

export default async function getRun ({ runId }: { runId: string }): Promise<RunAction> {
  const openai = new OpenAI({apiKey: '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'})

  const threadId = cookies().get('threads')?.value

  if (!runId) {
    return { error: 'No run found, please try again later', run: null }
  }

  if (!threadId) {
    return { error: 'No thread found, please try again later', run: null }
  }

  const run = await openai.beta.threads.runs.retrieve(threadId, runId)

  return { run, error: null }
}
