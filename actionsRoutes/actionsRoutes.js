// POSTS ROUTE HANDLERS
const express = require('express');
const router = express.Router();
const actionsDb = require('../data/helpers/actionModel.js');

router.route('/')
  .get((req, res) => {
    actionsDb.get()
      .then(actions => res.status(200).json(actions))
      .catch(err => res.status(500).json({ error: "The request for actions could not be retrieved" }));
  })

  module.exports = router;
  