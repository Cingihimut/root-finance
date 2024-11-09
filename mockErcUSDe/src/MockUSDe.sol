// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ERC20} from "/lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MockUSDe is ERC20 {

    uint256 public constant MAX_SUPPLY = 10e40;
    address public owner;
    
    constructor() ERC20("MockUSDe", "Tkn"){
        owner = msg.sender;
        _mint(msg.sender, 1000);
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "Only owner can mint this token");
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
    }
}