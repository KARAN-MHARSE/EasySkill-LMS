const express = require('express')
const router = express.Router();
const {signIn} = require('../controllers/user.controller')

router.route('/sign-in').post(signIn)

module.exports = router;