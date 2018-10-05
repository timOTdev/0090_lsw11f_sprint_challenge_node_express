// PROJECTS ROUTE HANDLERS
const express = require('express');
const router = express.Router();
const projectsDb = require('../data/helpers/projectModel.js');

router.route('/')
  .get((req, res) => {
    projectsDb.get()
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json({ error: "The request for projects could not be retrieved." }));
  })

module.exports = router;
