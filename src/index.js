const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const publicFolderPath = path.join(__dirname, '../public');
const templateFolderPath = path.join(__dirname, '../templates/views');
const partialFolderPath = path.join(__dirname, '../templates/partials');

//set view engine as hbs
app.set("view engine", "hbs");

//change views folder name to another name
app.set("views", templateFolderPath);

//registered partials.
hbs.registerPartials(partialFolderPath);

//for static pages
app.use(express.static(publicFolderPath));

app.get('/', (req, res) => {
    res.render("index", {
        username: "vaibhav"
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        username: "vaibhav"
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