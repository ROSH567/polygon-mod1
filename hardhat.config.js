require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["0xe76514e03a73aebcfcea33fdf8345b2e91927093c7f10086a26a7f79318bed75"],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ["0x3f751ab4e58c54df6dd4fd119f681e6172ca66333f0c0b349c379b894cf2afa1"],
    },
  }
};
