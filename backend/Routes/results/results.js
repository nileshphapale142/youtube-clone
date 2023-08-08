const express = require('express')
const router = express.Router()


router.get('/results', (req, res) => {
    res.json('Working on results page!!!!!')
})

module.exports = router