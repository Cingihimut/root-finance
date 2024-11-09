// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MockUSDe} from "../src/MockUSDe.sol";

contract MockUSDeScript is Script {
    MockUSDe public mockUSDe;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        mockUSDe = new MockUSDe();

        vm.stopBroadcast();
    }
}
