const { ethers } = require("hardhat");
const tokenOneArtifact = require("../artifacts/contracts/TokenOne.sol/TokenOne.json");
const tokenTwoArtifact = require("../artifacts/contracts/TokenTwo.sol/TokenTwo.json");
const utilContractArtifact = require("../artifacts/contracts/UtilContract.sol/UtilContract.json");
require('dotenv').config();

describe("UtilContract", () => {
    it("Balances", async() => {
		const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/b99wmTo2rNLyWO-3_Gl_-uveHqXScY_c');

        const tokenOneAddress = '0x215D46F51698424Ed72B1fDe1f1D9703d3Bf18Fa';
        const tokenTwoAddress = '0x4b23e79dc7D04f9C5172CD0fbb885F5779aa985B';
        const utilContractAddress = '0x01C5f60689cD890AC140Be15E06db29b7749e656';

        // Create env with populated PRIVATE_KEY
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY).connect(provider);
        const tokenOne = new ethers.Contract(tokenOneAddress, tokenOneArtifact.abi, wallet);
        const tokenTwo = new ethers.Contract(tokenTwoAddress, tokenTwoArtifact.abi, wallet);
        const utilContract = new ethers.Contract(utilContractAddress, utilContractArtifact.abi, wallet);

        const tokenOneTx = await tokenOne.setBalance(wallet.address, 2000);
        await tokenOneTx.wait();
        const tokenTwoTx = await tokenTwo.setBalance(wallet.address, 123);
        await tokenTwoTx.wait();

        const tokens = [
            tokenOneAddress,
            tokenTwoAddress
        ];

        const balances = await utilContract.getBalances(wallet.address, tokens);
        const parsedBalances = balances.map(({token, amount}) => ({
            token,
            balance: amount.toString()
        }));

        console.log(parsedBalances);
    });
});
