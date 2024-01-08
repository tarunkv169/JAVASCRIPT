// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   console.log(req.query.name)
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })










// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/contact', (req, res) => {
//   console.log(req.query.name)
//   res.send('contact')
// })

// app.get('/map', (req, res) => {
//   res.send('map')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })






const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './57_1_index.html'));
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
