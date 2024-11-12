// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import {IERC20} from"openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract ClaimUSDe{
    IERC20 public token;

    mapping(address => bool) public hasClaimed;
    event TokenClaimed(address indexed user, uint256 amount);

    constructor(address _token){
        token = IERC20(_token);
    }

    function ClaimTokens() external {
        require(!hasClaimed[msg.sender], "Already claimed");

        uint256 userBalance = token.balanceOf(msg.sender);
        require(userBalance > 0, "No tokens to claim");

        uint256 claimAmount = (userBalance * 13)/100;
        require(claimAmount > 0, "Claim amount too small");

        require(token.balanceOf(address(this)) >= claimAmount, "Insufficient contract balance");

        hasClaimed[msg.sender] = true;

        bool success = token.transfer(msg.sender, claimAmount);
        require(success, "Transfer failed");

        emit TokenClaimed(msg.sender, claimAmount);
    }

    function getClaimableAmount(address user) external view returns(uint256) {
        if(hasClaimed[user]){
            return 0;
        }

        uint256 userBalance = token.balanceOf(user);
        return(userBalance * 13) / 100;
    }
}
