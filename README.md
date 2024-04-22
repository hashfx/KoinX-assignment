# KoinX Assignment

## Features

*   Fetch and display a user's Ethereum transactions using the Etherscan API.
*   Retrieve the current price of Ethereum in INR using the CoinGecko API.
*   Store transaction and price data in a MongoDB Atlas database.

## Requirements

*   [Node.js and npm](https://nodejs.org/en/download)
*   [MongoDB Atlas account](https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/)

<!-- TASK 1 -->
<details>
<summary>TASK_1: Fetch Transaction using Ethereum API</summary>

+ ToDo
    + create ```.env``` file and store etherscan api as ```ETHERSCAN_API_KEY=YOUR_API_KEY```
    + add ```MONGODB_URI``` to .env as ```MONGODB_URI=YOUR_MONGODB_URI```
    + make sure not to push .env file in production

+ Run app
```shell
cd TASK_1
npm install
node index.js
```

+ Test API
    + go to your browser and type ```localhost:3000/transactions/YOUR_ADDRESS```
    + replace YOUR_ADDRESS with a transaction or wallet address
</details>

<!-- TASK 2 -->
<details>
<summary>TASK_2: Fetch Ethereum price every 10 minutes using CoinGecko API</summary>

+ ToDo
    + create ```.env``` file and store etherscan api as ```ETHERSCAN_API_KEY=YOUR_API_KEY```
    + add ```MONGODB_URI``` to .env as ```MONGODB_URI=YOUR_MONGODB_URI```
    + make sure not to push .env file in production

+ Run app
```shell
cd TASK_2
npm install
node index.js
```

</details>

<!-- TASK 3 -->
<details>
    <summary>TASK_3: Fetch balance of user and latest price of Ethereum</summary>

+ ToDo
    + visit ```localhost:3000/balance/ADDRESS``` in the browser and replace ```ADDRESS``` with address of the user

+ Run app
```shell
cd TASK_3
npm install
node index.js
```

</details>

<!-- End -->
<p align="center">Thanking You: developed by <a href="https://hashfx.github.io/Portfolio2022">HARSH SONI</a></p>
