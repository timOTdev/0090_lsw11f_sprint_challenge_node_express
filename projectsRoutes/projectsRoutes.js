// PROJECTS ROUTE HANDLERS
const express = require('express');
const router = express.Router();
const projectsDb = require('../data/helpers/projectModel.js');

router.route('/')
  .post((req, res) => {
    const { name, description, completed } = req.body;
    const newProject = { name, description, completed: completed || false } ;
    if (!name) return res.status(400).json({ error: "Please provide a project name."});
    if (!description) return res.status(400).json({ error: "Please provide a project description."});
    projectsDb.insert(newProject)
      .then(newProject => res.status(201).json(newProject))
      .catch(err => res.status(500).json({ error: "There was an error while saving the project to the database" }));
  })
  .get((req, res) => {
    projectsDb.get()
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json({ error: "The request for projects could not be retrieved." }));
  })

module.exports = router;
