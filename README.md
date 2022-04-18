# LeverageAMM
Setup Environment
Install Truffle via npm with global flag.

npm install -g Truffle
Install OpenZeppelin via npm in leveraged-amm folder.

 npm install @openzeppelin/contracts
Execute Tests for AMM
truffle test ./test/AMM.test.js
Execute Tests for Leveraged AMM
truffle test ./test/LeveragedAMM.test.js
Deployment
Run following command to compile smart contracts:

truffle compile
The output files will be generated in build/ folder. The output files contains smart contract ABI and bytecode for deployment and operation usage.

If you want to deploy smart contracts via truffle suit. Please reference to this tutorial to configure EVM node connection and your wallet.
