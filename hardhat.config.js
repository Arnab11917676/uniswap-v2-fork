require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//https://rpc.testnet.fantom.network/
module.exports = {
  solidity: "0.5.16",
  settings: {
    optimizer: {
      enabled: false,
      runs: 1000,
    },
  },
  networks: {
    fantom: {
      url: `https://speedy-nodes-nyc.moralis.io/6cda61c2558b548cb31fef81/fantom/mainnet`,
      accounts:[`${process.env.TESTING_WALLET_PRIVATE_KEY}`]
    },
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    currency: "USD",
    gasPrice: 40
  },
  etherscan: {
    apiKey: {
      // polygon: "YOUR_POLYGONSCAN_API_KEY",
      opera: process.env.FANTOMSCAN_API_KEY,
    }
  },
};
