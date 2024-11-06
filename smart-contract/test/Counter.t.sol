// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {RootFinance} from "../src/RootFinance.sol";

contract RootFinanceTest is Test {
    RootFinance public rootFi;

    function setUp() public {
        rootFi = new RootFinance();
    }
}
