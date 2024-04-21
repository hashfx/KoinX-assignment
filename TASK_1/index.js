require('dotenv').config();
const express = require('express');
const transactionController = require('./api/etherscanAPI');

const app = express();
const port = process.env.PORT || 3000;

// api endpoint to get transactions for input address
app.get('/transactions/:address', transactionController.getTransactions);
app.listen(port, () => console.log(`Server listening on port ${port}`));