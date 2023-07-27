const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/BetaToken.sol/MyNFT.json");
require('dotenv').config()

const tokenAddress = "0x4412E53CC568847e010e58303f8Ce836b781B370"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    console.log("You have: " + await token.balanceOf(walletAddress) + " tokens");
    console.log("AND : " + await token.getAddress() + " is the owner ");
    console.log("AND : " + await token.symbol() + " is the symbol ");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });