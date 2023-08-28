// const average = (data) => {
//   let sum = 0
//   let count = 0
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//       sum += data[i][j]
//       count++
//     }
//   }
// }

self.onmessage = ({ type, cb }) => {
  console.log(type)
  cb()
}
