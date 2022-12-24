const { ethers } = require('hardhat');

async function main() {
  const tokenOneFactory = await ethers.getContractFactory('TokenOne')
  const tokenOne = await tokenOneFactory.deploy();
  await tokenOne.deployed();
  console.log(`TokenOne deployed to: ${tokenOne.address}`);

  const tokenTwoFactory = await ethers.getContractFactory('TokenTwo')
  const tokenTwo = await tokenTwoFactory.deploy();
  await tokenTwo.deployed();
  console.log(`TokenTwo deployed to: ${tokenTwo.address}`);

  const utilContractFactory = await ethers.getContractFactory('UtilContract')
  const utilContract = await utilContractFactory.deploy(tokenOne.address, tokenTwo.address);
  await utilContract.deployed();
  console.log(`UtilContract deployed to: ${utilContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
