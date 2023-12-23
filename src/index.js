const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.join(__dirname, '../public');

app.use(express.static(publicFolderPath));
app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/about', (req, res) => {
    res.write('this is about page..');
    res.send();
});

app.listen(7000, () => {
    console.log('loaded');
})