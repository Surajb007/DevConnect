const express = require('express');

const router = express.Router();

// @route POST /api/users
// @desc  Register User
// @access Public

router.post('/', (req, res) => {
  res.send(req.body);
});

module.exports = router;
