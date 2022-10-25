const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Node-App2!')
})

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`)
})