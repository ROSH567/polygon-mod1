const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/BetaToken.sol/MyNFT.json");

const tokenAddress = "0x0A3aB21cfa850a2c519f3061225Ae2601e379aDc"; 
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xbEEfeA95ec64eAdfdb46733fA435fe8C72E73A61"; 
const tokenIds=[0,1,2,3,4];
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);

   for(let i=0;i<tokenIds.length;i++)
    {
    const approve = await tokenContract.approve(fxERC721RootAddress, tokenIds[i]);
    await approve.wait();
    console.log("APPROVED NFT "+ tokenIds[i]+1);
    const depositTx = await fxContract.deposit(tokenAddress,walletAddress,tokenIds[i],"0x6556");
    await depositTx.wait();
    console.log("Deposited NFT "+ tokenIds[i]+1);


    }
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
