const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Database
require('./config/db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
const addRoutes = require('./routes/add');
const editRoutes = require('./routes/edit');

app.use('/', indexRoutes);
app.use('/add', addRoutes);
app.use('/edit', editRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});