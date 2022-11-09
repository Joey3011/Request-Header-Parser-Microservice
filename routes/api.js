const express = require('express')
const router = express.Router()

router.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.connection.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

module.exports = router