// import WebWorker from 'web-worker'

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

export const worker = typeof window !== 'undefined' && window.Worker ?
  new Worker(
    new URL('@/components/hooks/workerMain.worker.js', import.meta.url),
    { type: 'module' }
  ) :
  null


export const average = (data: number[]) => {
  return data.reduce((acc, val) => acc + val, 0) / data.length
}

export const variance = (data: number[]) => {
  const averageNum = average(data)
  return data.map(item => ((item - averageNum) ** 2)).reduce((acc, val) => acc + val, 0) / data.length
}
