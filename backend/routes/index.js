const express = require('express')
const router = express.Router()

router.use('/auth', require('./routes/users'))
module.exports = router