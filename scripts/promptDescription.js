const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/BetaToken.sol/MyNFT.json");
require('dotenv').config()

const tokenAddress = "0x4412E53CC568847e010e58303f8Ce836b781B370"; // place your erc20 contract address here

async function main() {

    const tokenABI = tokenContractJSON.abi;

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  

    console.log(await token.promptDescription());
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });