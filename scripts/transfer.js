const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/BetaToken.sol/MyNFT.json");

const tokenAddress = "0x4412E53CC568847e010e58303f8Ce836b781B370"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xbEEfeA95ec64eAdfdb46733fA435fe8C72E73A61"; // place your public address for your wallet here
const tokenIds=[0,1,2,3,4];
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);

   for(let i=0;i<tokenIds.length;i++)
    {const depositTx = await tokenContract.safeTransferFrom(walletAddress,fxERC20RootAddress,tokenIds[i]);
    await depositTx.wait();
    }
    
  }
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });