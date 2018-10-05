// IMPORTS
const express = require('express');
const port = 8000;

// SETUP
const server = express();
server.use(express.json());

// ROUTE HANDLERS
server.get('/', (req, res) => {
  res.send("Hello World");
})

// PORT LISTENERS
server.listen(port, () => console.log(`===${port} is online!===`))
