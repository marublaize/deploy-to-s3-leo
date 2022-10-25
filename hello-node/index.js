const http = require('http')
const express = require('express')
const { createTerminus } = require('@godaddy/terminus')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

const server = http.createServer(app)

// start cleanup of resource, like databases or file descriptors
function onSignal () {
  console.log('Server is starting cleanup')
}

// checks if the system is healthy, like the db connection is live
// resolves, if health, rejects if not
async function onHealthCheck () {
}

createTerminus(server, {
  signal: 'SIGINT',
  healthChecks: { '/healthcheck': onHealthCheck },
  onSignal
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
}
)