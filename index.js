// IMPORTS
const express = require('express');
const projectsRoutes = require('./projectsRoutes/projectsRoutes.js');
const port = 8000;

// SETUP
const server = express();
server.use(express.json());

// ROUTE HANDLERS
server.use('/projects', projectsRoutes);

// PORT LISTENERS
server.listen(port, () => console.log(`===${port} is online!===`))
