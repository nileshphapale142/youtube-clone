const express = require('express')
const router = express.Router()

class YoutubeVideo {
    constructor(title, thumbnail, views, uploadTime, uploadDate, channelName, channelLogo) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.views = views;
        this.uploadTime = uploadTime;
        this.uploadDate = uploadDate;
        this.channelName = channelName;
        this.channelLogo = channelLogo;
    }
}

let videos = [
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
]

router.get('/', (req, res) => {
    res.json(videos)
})

module.exports = router