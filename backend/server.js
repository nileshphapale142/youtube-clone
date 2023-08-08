const express = require('express');
const cors = require('cors')

const watch = require('./Routes/watch/watch')
const results = require('./Routes/results/results')
const chips = require('./Routes/chips/chips')
const home = require('./Routes/home/home')

const app = express();
const port = 3001;

app.use(cors())

app.get('/', home)
app.get('/chips', chips)
app.get('/results', results)
app.get('/watch' , watch)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});