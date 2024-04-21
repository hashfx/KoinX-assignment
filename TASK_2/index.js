require('dotenv').config();
const express = require('express');
const transactionController = require('./api/etherscanAPI');
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchPrice = require('./api/priceFetcherAPI');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// api endpoint to get transactions for input address
app.get('/transactions/:address', transactionController.getTransactions);
app.listen(port, () => console.log(`Server listening on port ${port}`));

// schedule fetching price of ethereum every 10 minutes
cron.schedule('*/10 * * * *', fetchPrice);