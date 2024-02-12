import * as core from '@actions/core'
import { runPolarTests } from './run-polar-tests'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // Run the polar tests. If they fail, the action will return a failure.
    await runPolarTests()
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
