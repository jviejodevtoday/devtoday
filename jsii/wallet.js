var HDWallet = require('hdwallet')
var settings 
var hd = new HDWallet({
  settings : settings || {},
  redisPort: 'optional',
  redisHost: 'optional',
  network: 'optional',
  mnemonic: HDWallet.generateMnemonic(),
})

console.log(hd.mnemonic, HDWallet.createNewKey())

