const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World ')
})

app.get('/name', (req, res) => {
    res.send('Hello World from name')
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
