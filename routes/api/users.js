const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Users API'));
router.get('/user', (req, res) => res.send('User'));

module.exports = router;
