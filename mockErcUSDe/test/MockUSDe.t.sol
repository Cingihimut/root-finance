// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {MockUSDe} from "../src/MockUSDe.sol";
import {ClaimUSDe} from "../src/ClaimUSDe.sol";

contract MockUSDeTest is Test {
    MockUSDe public mockUSDe;
    ClaimUSDe public claimUSDe;
    address public owner;
    address public alice;
    address public rudi;

    event TokenClaimed(address indexed user, uint256 amount);

    function setUp() public {
        owner = makeAddr("owner");
        alice = makeAddr("alice");
        rudi = makeAddr("rudi");

        vm.startPrank(owner);
        mockUSDe = new MockUSDe();
        claimUSDe = new ClaimUSDe(address(mockUSDe));
        vm.stopPrank();
    }

    function testInitialOwner() public view {
        assertEq(mockUSDe.owner(), owner);
    }

    function test_Mint() public {
        uint256 mintAmount = 1000 * 10**18;

        vm.prank(owner);
        mockUSDe.mint(alice, mintAmount);
        assertEq(mockUSDe.balanceOf(alice), mintAmount);
    }

    function test_MintOnlyOwner() public {
        uint256 mintAmount = 1000 * 10**18;

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
        vm.prank(owner);
        mockUSDe.transferOwnership(alice);
        assertEq(mockUSDe.owner(), alice);

        vm.prank(alice);
        mockUSDe.mint(rudi, 1000 * 10**18);
        assertEq(mockUSDe.balanceOf(rudi), 1000 * 10**18);
    }

    function test_RenounceOwnership() public {
        vm.prank(owner);
        mockUSDe.renounceOwnership();
        
        assertEq(mockUSDe.owner(), address(0));

        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", owner));
        vm.prank(owner);
        mockUSDe.mint(alice, 1000 * 10**18);
    }

    function test_ClaimUSDe() public {
        vm.prank(alice);
        mockUSDe.claimUSDe();
        
        assertEq(mockUSDe.balanceOf(alice), mockUSDe.CLAIM_AMOUNT());
        assertTrue(mockUSDe.hasClaimed(alice));
    }

    function test_ClaimUSDe_AlreadyClaimed() public {
        vm.startPrank(alice);
        mockUSDe.claimUSDe();
        
        vm.expectRevert("Already claimed");
        mockUSDe.claimUSDe();
        vm.stopPrank();
    }

    function test_ClaimTokens() public {
        uint256 initialBalance = 1000 * 10**18;
        uint256 expectedClaim = (initialBalance * 13) / 100;

        vm.startPrank(owner);
        mockUSDe.mint(alice, initialBalance);
        mockUSDe.mint(address(claimUSDe), initialBalance * 2);
        vm.stopPrank();

        vm.startPrank(alice);
        mockUSDe.approve(address(claimUSDe), type(uint256).max);
        
        uint256 beforeBalance = mockUSDe.balanceOf(alice);
        
        vm.expectEmit(true, false, false, true);
        emit TokenClaimed(alice, expectedClaim);
        
        claimUSDe.ClaimTokens();
        
        uint256 afterBalance = mockUSDe.balanceOf(alice);
        assertEq(afterBalance - beforeBalance, expectedClaim);
        assertTrue(claimUSDe.hasClaimed(alice));
        vm.stopPrank();
    }

    function test_ClaimTokens_NoBalance() public {
        vm.prank(alice);
        vm.expectRevert("No tokens to claim");
        claimUSDe.ClaimTokens();
    }

    function test_ClaimTokens_AlreadyClaimed() public {
        uint256 initialBalance = 1000 * 10**18;

        vm.startPrank(owner);
        mockUSDe.mint(alice, initialBalance);
        mockUSDe.mint(address(claimUSDe), initialBalance * 2);
        vm.stopPrank();

        vm.startPrank(alice);
        mockUSDe.approve(address(claimUSDe), type(uint256).max);
        claimUSDe.ClaimTokens();

        vm.expectRevert("Already claimed");
        claimUSDe.ClaimTokens();
        vm.stopPrank();
    }

    function test_ClaimTokens_InsufficientContractBalance() public {
        uint256 initialBalance = 1000 * 10**18;

        vm.prank(owner);
        mockUSDe.mint(alice, initialBalance);

        vm.startPrank(alice);
        mockUSDe.approve(address(claimUSDe), type(uint256).max);

        vm.expectRevert("Insufficient contract balance");
        claimUSDe.ClaimTokens();
        vm.stopPrank();
    }

    function test_GetClaimableAmount() public {
        uint256 initialBalance = 1000 * 10**18;
        
        vm.prank(owner);
        mockUSDe.mint(alice, initialBalance);

        uint256 expectedClaimable = (initialBalance * 13) / 100;
        uint256 claimable = claimUSDe.getClaimableAmount(alice);
        assertEq(claimable, expectedClaimable);
    }

    function test_GetClaimableAmount_AfterClaim() public {
        uint256 initialBalance = 1000 * 10**18;

        vm.startPrank(owner);
        mockUSDe.mint(alice, initialBalance);
        mockUSDe.mint(address(claimUSDe), initialBalance * 2);
        vm.stopPrank();

        vm.startPrank(alice);
        mockUSDe.approve(address(claimUSDe), type(uint256).max);
        claimUSDe.ClaimTokens();
        vm.stopPrank();

        uint256 claimable = claimUSDe.getClaimableAmount(alice);
        assertEq(claimable, 0);
    }
}