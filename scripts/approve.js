const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/BetaToken.sol/MyNFT.json");

const tokenAddress = "0x4412E53CC568847e010e58303f8Ce836b781B370"; 
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xbEefaF34CFB4FF3Cae84C6DA56A6D53B5D40A29a"; 
const tokenIds=[0,1,2,3,4];
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);

   for(let i=0;i<tokenIds.length;i++)
    {
    const approve = await tokenContract.approve(fxERC721RootAddress, tokenIds[i]);
    await approve.wait();
    }
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });