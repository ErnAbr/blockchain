// eslint-disable-next-line no-undef
const FaucetContract = artifacts.require("Faucet");

// eslint-disable-next-line no-undef
module.exports = function (deployer) {
  deployer.deploy(FaucetContract);
};
