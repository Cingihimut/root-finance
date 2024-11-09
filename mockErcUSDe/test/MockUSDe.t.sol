// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {MockUSDe} from "../src/MockUSDe.sol";

contract MockUSDeTest is Test {
    MockUSDe public mockUSDe;
    address public owner;
    address public alice;
    address public rudi;

    event OwnershipTransferred(address indexed prevOwner, address indexed newOwner);

    function setUp() public {
        owner = makeAddr("owner");
        alice = makeAddr("alice");
        rudi = makeAddr("rudi");

        // Deploy contract as owner
        vm.prank(owner);
        mockUSDe = new MockUSDe();
    }

    function testInitialOwner() public {
        assertEq(mockUSDe.owner(), owner);
    }

    function test_Mint() public {
        uint256 mintAmount = 1000;

        vm.prank(owner);
        mockUSDe.mint(alice, mintAmount);
        assertEq(mockUSDe.balanceOf(alice), mintAmount);
    }

    function test_MintOnlyOwner() public {
        uint256 mintAmount = 1000;

        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", alice));
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
        // Verify initial owner
        assertEq(mockUSDe.owner(), owner);

        // Transfer ownership to alice
        vm.prank(owner);
        mockUSDe.transferOwnership(alice);
        assertEq(mockUSDe.owner(), alice);

        // Alice should be able to mint now
        vm.prank(alice);
        mockUSDe.mint(rudi, 1000);
        assertEq(mockUSDe.balanceOf(rudi), 1000);
    }

    function test_RenounceOwnership() public {
        vm.prank(owner);
        mockUSDe.renounceOwnership();
        
        // Ownership should be transferred to zero address
        assertEq(mockUSDe.owner(), address(0));

        // Previous owner should not be able to mint anymore
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", owner));
        vm.prank(owner);
        mockUSDe.mint(alice, 1000);
    }
}
