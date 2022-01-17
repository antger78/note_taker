const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// allow use of the public folder without explicit endpoints
app.use(express.static('Develop/public'));

const { notes } = require('./Develop/db/db.json');
const { json } = require('express/lib/response');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });