const { getUniTVL } = require("../helper/unknownTokens");
const { stakings } = require("../helper/staking");

const DACKIE = "0x73326b4d0225c429bed050c11C4422d91470AaF4";

const stakingPools = [
  // Lock & flexible pool
  "0xF6C5b5Df9Bcee40cd474CCd6373f99b56dBCF5E5",
];
const config = {
  optimism: '0xaedc38bd52b0380b2af4980948925734fd54fbf4',
  mode: '0x757cd583004400ee67e5cc3c7a60c6a62e3f6d30',
  base: '0x591f122D1df761E616c13d265006fcbf4c6d6551',
  wc: '0x757cD583004400ee67e5cC3c7A60C6a62E3F6d30',
}

module.exports = {
  misrepresentedTokens: true,
}

Object.keys(config).forEach(chain => {
  module.exports[chain] = {
    tvl: getUniTVL({ factory: config[chain], useDefaultCoreAssets: true })
  }
})

module.exports.base.staking = stakings(stakingPools, DACKIE)
