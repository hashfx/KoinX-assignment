// fetch and store transaction

const axios = require('axios');
const Transaction = require('../schema/transaction');

exports.getTransactions = async (req, res) => {
    const address = req.params.address;
    const apiKey = process.env.ETHERSCAN_API_KEY;

    try {
        // fetch transactions from Etherscan API
        const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`);
        const transactions = response.data.result;
        
        // filter for "Normal" transactions
        const normalTransactions = transactions.filter(tx => tx.txreceipt_status === '1');

        // store transactions in MongoDB
        await Transaction.insertMany(normalTransactions.map(tx => ({ ...tx, address })));

        res.json(normalTransactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching transactions' });
    }
};