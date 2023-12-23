const express = require('express');
const app = express();
const path = require('path');

const publicFolderPath = path.join(__dirname, '../public');

app.set("view engine", "hbs");

app.use(express.static(publicFolderPath));

app.get('/', (req, res) => {
    res.render("index", {
        username:"vaibhav"
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        username:"vaibhav"
    });
});

app.get('/', (req, res) => {
    res.send('index page from route');
});

app.get('/about', (req, res) => {
    res.write('about page from route');
    res.send();
});

app.listen(7000, () => {
    console.log('loaded');
});