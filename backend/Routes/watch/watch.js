const express = require('express')
const router = express.Router()


router.get('/watch', (req, res) => {
    res.json({
        id: "video_id",
        captionsAvailable: true,
        length: 157
    })
})

module.exports = router