// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

contract MockUSDe is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1e40;
    uint256 public constant CLAIM_AMOUNT = 1000 * (10 ** 18);
    mapping(address => bool) public hasClaimed;
    
    constructor() ERC20("MockUSDe", "Tkn") Ownable(msg.sender) {}

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
    }

    function claimUSDe() external {
        require(!hasClaimed[msg.sender], "Already claimed");
        require(totalSupply() + CLAIM_AMOUNT <= MAX_SUPPLY, "Max supply exceeded");

        hasClaimed[msg.sender] = true;
        _mint(msg.sender, CLAIM_AMOUNT);
    }
}
