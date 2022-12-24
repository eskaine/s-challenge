//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './TokenOne.sol';
import './TokenTwo.sol';

struct TokenBalance {
    address token;
    uint256 amount;
}

contract UtilContract {
    TokenOne private _tokenOne;
    TokenTwo private _tokenTwo;

    constructor(TokenOne tokenOne, TokenTwo tokenTwo) {
        _tokenOne = tokenOne;
        _tokenTwo = tokenTwo;
    }

    function getBalances(address owner, address[] calldata tokensList) external view returns (TokenBalance[] memory) {
        TokenBalance[] memory ownerBalances = new TokenBalance[](tokensList.length);

        for(uint256 i=0; i < tokensList.length; i++) {
            uint256 balance = getContracts(owner,tokensList[i]);
            ownerBalances[i] = TokenBalance(tokensList[i], balance); 
        }

        return ownerBalances;
    }

    function getContracts(address owner, address tokenAddress) private view returns (uint256) {
        if(tokenAddress == address(_tokenOne)) {
            return _tokenOne.balanceOf(owner);
        } else if(tokenAddress == address(_tokenTwo)) {
            return _tokenTwo.balanceOf(owner);
        }

        return 0;
    }
}
