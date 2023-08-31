const average = (data) => {
  return data.reduce((acc, val) => acc + val, 0) / data.length
}

export const variance = (data) => {
  const averageNum = average(data)
  return data.map(item => ((item - averageNum) ** 2)).reduce((acc, val) => acc + val, 0) / data.length
}

self.addEventListener('message', ({ data: { data }}) => {
  let out = variance(data)
  // 模拟大量运算
  for (let i = 0; i < 100; i ++) out = variance(data)
  self.postMessage({ data: out })
})
