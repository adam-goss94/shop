const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');

const app = express();

/* MIDDLEWARE */
// standard middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ products: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb+srv://Adam:anime123@cluster0.5ctir.mongodb.net/shopDB?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
