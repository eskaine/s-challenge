//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenTwo {
    mapping(address => uint256) private _balances;

    function setBalance(address owner, uint256 amount) external {
        _balances[owner] = amount;
    }

    function balanceOf(address owner) external view returns (uint256) {
        return _balances[owner];
    }
}
