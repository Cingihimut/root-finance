// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {MockUSDe} from "../src/MockUSDe.sol";
import {LockToken} from "../src/LockToken.sol";

contract MockUSDeTest is Test {
    MockUSDe public mockUSDe;
    LockToken public lockToken;
    address public owner;
    address public alice;
    address public rudi;

    event TokenLocked(address indexed user, uint256 amount, uint256 unlockTime);
    event TokenClaimed(address indexed user, uint256 amount);

    function setUp() public {
        owner = makeAddr("owner");
        alice = makeAddr("alice");
        rudi = makeAddr("rudi");

        vm.startPrank(owner);
        mockUSDe = new MockUSDe();
        lockToken = new LockToken(address(mockUSDe));
        vm.stopPrank();
    }

    function testInitialOwner() public view {
        assertEq(mockUSDe.owner(), owner);
    }

    function test_Mint() public {
        uint256 mintAmount = 1000 * 10 ** 18;

        vm.prank(owner);
        mockUSDe.mint(alice, mintAmount);
        assertEq(mockUSDe.balanceOf(alice), mintAmount);
    }

    function test_MintOnlyOwner() public {
        uint256 mintAmount = 1000 * 10 ** 18;

        vm.expectRevert(
            abi.encodeWithSignature(
                "OwnableUnauthorizedAccount(address)",
                alice
            )
        );
        vm.prank(alice);
        mockUSDe.mint(rudi, mintAmount);
    }

    function test_MintExceedsMaxSupply() public {
        uint256 overMaxSupply = 2e40;

        vm.prank(owner);
        vm.expectRevert("Max supply exceeded");
        mockUSDe.mint(alice, overMaxSupply);
    }

    function test_TransferOwnership() public {
        vm.prank(owner);
        mockUSDe.transferOwnership(alice);
        assertEq(mockUSDe.owner(), alice);

        vm.prank(alice);
        mockUSDe.mint(rudi, 1000 * 10 ** 18);
        assertEq(mockUSDe.balanceOf(rudi), 1000 * 10 ** 18);
    }

    function test_RenounceOwnership() public {
        vm.prank(owner);
        mockUSDe.renounceOwnership();

        assertEq(mockUSDe.owner(), address(0));

        vm.expectRevert(
            abi.encodeWithSignature(
                "OwnableUnauthorizedAccount(address)",
                owner
            )
        );
        vm.prank(owner);
        mockUSDe.mint(alice, 1000 * 10 ** 18);
    }

    function test_LockToken() public {
        uint256 lockAmount = 1000 * 10 ** 18;

        vm.prank(owner);
        mockUSDe.mint(alice, lockAmount);

        assertEq(mockUSDe.balanceOf(alice), lockAmount);

        vm.prank(alice);
        mockUSDe.approve(address(lockToken), lockAmount);

        vm.prank(alice);
        lockToken.lock(lockAmount);

        (uint256 amount, uint256 unlockTime, bool claimed) = lockToken
            .lockedTokens(alice);

        assertEq(amount, lockAmount);
        assertEq(claimed, false);
        assert(unlockTime > block.timestamp);
    }

    function test_ClaimRewardAfterUnlock() public {
        uint256 lockAmount = 1000 * 10 ** 18;
        uint256 expectedReward = (lockAmount * 13) / 100;

        vm.prank(owner);
        mockUSDe.mint(alice, lockAmount);
        vm.prank(alice);
        mockUSDe.approve(address(lockToken), lockAmount);

        vm.prank(alice);
        lockToken.lock(lockAmount);

        vm.warp(block.timestamp + 1 weeks);

        vm.prank(alice);
        vm.expectEmit(true, true, false, true);
        emit TokenClaimed(alice, expectedReward);
        lockToken.claimReward();

        assertEq(mockUSDe.balanceOf(alice), expectedReward);

        (, , bool claimed) = lockToken.lockedTokens(alice);
        assertEq(claimed, true);
    }
}
