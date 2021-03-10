// configuration
var Web3 = require("web3");
var web3 = new Web3("HTTP://localhost:7545");

web3.eth.getTransactionCount("0x70B19D0309fAe9f8FDe564f13E05322647c47D74").then(console.log);
