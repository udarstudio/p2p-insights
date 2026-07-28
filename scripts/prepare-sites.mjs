import { cp, mkdir, rm } from 'node:fs/promises'

const outputDirectory = new URL('../.output/public/', import.meta.url)
const sitesDirectory = new URL('../dist', import.meta.url)
const clientDirectory = new URL('../dist/client/', import.meta.url)
const serverDirectory = new URL('../dist/server/', import.meta.url)
const workerSource = new URL('../.openai/sites-worker.js', import.meta.url)
const workerOutput = new URL('../dist/server/index.js', import.meta.url)

await rm(sitesDirectory, { recursive: true, force: true })
await mkdir(clientDirectory, { recursive: true })
await mkdir(serverDirectory, { recursive: true })
await cp(outputDirectory, clientDirectory, { recursive: true })
await cp(workerSource, workerOutput)
