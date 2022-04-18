const LAMM = artifacts.require('LeveragedAMM')
const MockUSDC = artifacts.require('MockUSDC')

module.exports = (deployer) => {
    deployer.deploy(MockUSDC).then(() => deployer.deploy(LAMM, MockUSDC.address))
}