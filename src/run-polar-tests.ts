import * as core from '@actions/core'
import * as exec from '@actions/exec'
import { ExecOptions } from '@actions/exec'
import * as fs from 'fs'
import { glob } from 'glob'

/**
 * @returns {Promise<void>}
 */
export async function runPolarTests(): Promise<void> {
  let output = ''
  let error = ''

  const options: ExecOptions = {}

  options.listeners = {
    stdout: (data: Buffer) => {
      output += data.toString()
    },
    stderr: (data: Buffer) => {
      error += data.toString()
    }
  }

  const polarFiles: string[] = await glob('**/*.polar', {
    ignore: 'node_modules/**'
  })
  const polarFilesNoSymlinks: string[] = polarFiles.filter(
    file => !fs.lstatSync(file).isSymbolicLink()
  )
  await exec.exec('oso-cloud', ['test'].concat(polarFilesNoSymlinks), options)

  core.debug(`stdout from polar tests: \n${output}`)
  core.debug(`stderr from polar tests: \n${error}`)
}
