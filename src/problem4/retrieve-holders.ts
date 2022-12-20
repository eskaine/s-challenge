import { ethers, BigNumber } from 'ethers';
import { swthAbi } from './abi';

const bscMainnet = 'https://bsc-dataseed.binance.org';
const swthContractAddress = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
const lookups = [
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
];

const bscProvider = new ethers.providers.JsonRpcProvider(bscMainnet);
const swthContract = new ethers.Contract(swthContractAddress, swthAbi, bscProvider);

Promise.all(
    lookups.map((address: string) => swthContract.callStatic.balanceOf(address))
).then((res: BigNumber[]) => {
    res.forEach((data, i) => console.log(`${lookups[i]} ${BigNumber.from(data._hex)}`));
});
