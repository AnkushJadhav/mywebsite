const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const path = require('path');
const logger = require('./Logger');

const port = process.env.PORT || 3001;

var app = express();
// Loading coming soon static assets
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials/');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})
app.set('view engine', 'hbs');

// Home page (Currenctly coming-soon)
app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.listen(port, () => {
  logger.logInfo(`Server is up on port ${port}`);
});
