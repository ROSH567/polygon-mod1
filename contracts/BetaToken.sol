// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


// Your ERC-721 contract
contract MyNFT is ERC721URIStorage, Ownable {
    // Counter for token IDs
    uint256 public tokenIdCounter;

    // Constructor
    constructor() ERC721("MyNFT", "NFT") {
        tokenIdCounter = 0;
    }

    function mintToken(address to, string memory tokenURI) external onlyOwner() {
        uint256 newTokenId = tokenIdCounter;
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenIdCounter++;
    }

    // Function to batch mint multiple tokens
    function batchMintTokens(address to, string[] calldata tokenURIs) external onlyOwner() {
        for (uint256 i = 0; i < tokenURIs.length; i++) {
            uint256 newTokenId = tokenIdCounter;
            _mint(to, newTokenId);
            _setTokenURI(newTokenId, tokenURIs[i]);
            tokenIdCounter++;
        }
    }

    function promptDescription() public pure returns(string memory,string[5] memory)
    {

              return ("The Prompts used to generate the images used on Adobe Firefly are:: ",["1. a blue man with eye balls out of the eyes with long teeth","2. a big banyan tree","3. a big banyan tree with a boy sitting beneath and playing a bamboo flute.","4. a white colored calf with its mother with a background of village","5. a dinosaur wearing t-shirt with some text on it"]);

    }

}
