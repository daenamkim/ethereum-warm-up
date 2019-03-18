const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface: abi, bytecode } = require('./compile');

const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_API);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);
};
deploy();
// 0x8Ffa867195605Dbd5c48561FA87E3af07B37334F
// 0xf9548e3437b107f6Bc2820784714b4Ab7f1D7B46
// 0xFEC2cD3929d9e2E01679B2f7BB5A50556cEd3EE7

/*
 truffle-hdwallet-provider version 0.0.3

const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });


truffle-hdwallet-provider versions 0.0.4, 0.0.5 and 0.0.6

const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'

 */
