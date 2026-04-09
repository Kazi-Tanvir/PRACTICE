const express = require('express');
const blog = require('./routes/blog');
const shop = require('./routes/shop');

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log('Homepage accessed');
    res.send('Welcome to the homepage!');
}).post('/', (req, res) => {
    console.log('Homepage POST request received');
    res.send('POST request to the homepage!');
});

app.put('/', (req, res) => {
    console.log('Update endpoint accessed');
    res.send('Update successful!');
});

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})