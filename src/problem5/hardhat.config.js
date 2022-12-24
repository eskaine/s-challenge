require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
       chainId: 1337
    },
    goerli: {
      url: process.env.TESTNET_API,
      accounts: [process.env.PRIVATE_KEY]
    }
 },
};
