
const tdList = (): number[] => {
  const out: number[] = []
  while (out.length < 100) {
    out.push(3000 + Math.floor(1000 * Math.random()))
  }
  return out
}

export const trList = (): number[][] => {
  const out: number[][] = []
  while (out.length < 400) {
    out.push(tdList())
  }
  return out
}

import { resolve } from 'path'

export const worker = typeof window !== 'undefined' ? new Worker(resolve(__dirname, './worker.worker.js')) : null
