// importScripts("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")
// importScripts('axios.js')
importScripts('/static/axios.js')
self.addEventListener('message', ({ data }) => {
  axiosTest()
  console.log(data)
  self.postMessage('hello, this is worker thread')
})

const axiosTest = () => {
  axios.get('https://10.167.36.36/monitor/api/statistics/qd/cloud/top_n/')
    .then(({ data }) => {
      console.log(data)
    })
}