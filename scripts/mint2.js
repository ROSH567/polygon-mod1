// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/BetaToken.sol/MyNFT.json");
require('dotenv').config()

const tokenaddress = "0x4412E53CC568847e010e58303f8Ce836b781B370"; 
const toaddress = "0xbEEfeA95ec64eAdfdb46733fA435fe8C72E73A61"; 
const tokenABI = tokenContractJSON.abi;
const uris=["https://gateway.pinata.cloud/ipfs/QmSwd1mVpQDzdcJFM9BS2N4r5RcSahRFGGytXGVWheLMBn?_gl=1*fzpyh9*_ga*NDA2MzYyNDcxLjE2OTAyNzk1NTQ.*_ga_5RMPXG14TE*MTY5MDQzODUyMi42LjAuMTY5MDQzODUyMi42MC4wLjA.","https://gateway.pinata.cloud/ipfs/QmZWgXiiyshfp7s1Fu1QacxsaeF4KsesKhrZcUmsLAzywo?_gl=1*1h7ucwc*_ga*NDA2MzYyNDcxLjE2OTAyNzk1NTQ.*_ga_5RMPXG14TE*MTY5MDQzODUyMi42LjEuMTY5MDQzODUzNS40Ny4wLjA.","https://gateway.pinata.cloud/ipfs/QmT6TPuXd8WdF8aECuasb6BUNCaD8gKZpAMQNxPxskim4k?_gl=1*1h7ucwc*_ga*NDA2MzYyNDcxLjE2OTAyNzk1NTQ.*_ga_5RMPXG14TE*MTY5MDQzODUyMi42LjEuMTY5MDQzODUzNS40Ny4wLjA.","https://gateway.pinata.cloud/ipfs/QmbFsP2mQ6tfVtorto9oaWKf9hkuUKUokPWSAfGGB5fjKd?_gl=1*5eveea*_ga*NDA2MzYyNDcxLjE2OTAyNzk1NTQ.*_ga_5RMPXG14TE*MTY5MDQzODUyMi42LjEuMTY5MDQzODUzNS40Ny4wLjA.","https://gateway.pinata.cloud/ipfs/QmVbKiKwHWwurxo9cyzZFzKCF9BzxLVcZUUnbwrfZ697jX?_gl=1*5eveea*_ga*NDA2MzYyNDcxLjE2OTAyNzk1NTQ.*_ga_5RMPXG14TE*MTY5MDQzODUyMi42LjEuMTY5MDQzODUzNS40Ny4wLjA."];
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI,tokenaddress );
  
    const tx = await token.batchMintTokens(toaddress,uris);
    await tx.wait();

    // console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });