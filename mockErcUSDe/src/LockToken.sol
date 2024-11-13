// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {IERC20} from"openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract LockToken {
    IERC20 public token;
    uint256 public lockPeriod = 1 weeks;
    uint256 public claimPercentage = 13;

    struct LockedToken {
        uint256 amount;
        uint256 unlockTime;
        bool claimed;
    }

    mapping(address => LockedToken) public lockedTokens;
    event TokenClaimed(address indexed user, uint256 amount);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function lock(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(token.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");

        lockedTokens[msg.sender] = LockedToken({
            amount: _amount,
            unlockTime: block.timestamp + lockPeriod,
            claimed: false
        });
    }

    function claimReward() external {
        LockedToken storage userLock = lockedTokens[msg.sender];
        require(block.timestamp >= userLock.unlockTime, "Tokens are still locked");
        require(!userLock.claimed, "Reward already claimed");

        uint256 rewardAmount = (userLock.amount * claimPercentage) / 100;
        userLock.claimed = true;
        require(token.transfer(msg.sender, rewardAmount), "Reward transfer failed");

        emit TokenClaimed(msg.sender, rewardAmount);
    }
}
