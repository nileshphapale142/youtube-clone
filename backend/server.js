const express = require('express');
const app = express();
const port = 3001;

const chipsArray = [
    'All', 'Music', 'Live', 'Scene', 'Dramedy',
    'Bollywood Music', 'News', 'Gaming', 'Movies', 'Cricket',
    'Football', 'Mantra', 'Gadgets and the best', 'Universe'
]

app.get('/chips', (req, res) => {
    res.json(chipsArray)
})


app.get('/some', (req, res) => {
    res.json({some : 'wanna watch a movie'})
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});