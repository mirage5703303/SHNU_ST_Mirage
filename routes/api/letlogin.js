const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
// const passport = require('passport');

router.get('/test', (req, res) => res.json({ msg: 'letlogin Works' }));

module.exports = router;
