const express = require('express')
const router = express.Router()

const chipsArray = [
    'All', 'Music', 'Live', 'Scene', 'Dramedy',
    'Bollywood Music', 'News', 'Gaming', 'Movies', 'Cricket',
    'Football', 'Mantra', 'Gadgets and the best', 'Universe'
]


router.get('/chips', (req, res) => {
    res.json(chipsArray)
})

module.exports = router