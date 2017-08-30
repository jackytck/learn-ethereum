## geth
```bash
go get -d github.com/ethereum/go-ethereum
go install github.com/ethereum/go-ethereum/cmd/geth

# Geth JavaScript console
geth --datadir=./datadir console
```

## init
```bash
geth --datadir=./datadir init genesis.json

# new account
geth --datadir=./datadir account new

# list accounts
geth --datadir=./datadir account list
```

## compiling
```bash
yarn global add solc
solcjs --bin --abi counter.sol
```

## deploying
```bash
cat counter_sol_Counter.bin | pbcopy

# geth console
var counterCode = "XXXXXXX"

# unlock account
personal.unlockAccount(eth.accounts[0], 'XXXX')

# read balance
web3.fromWei(eth.getBalance(eth.accounts[0]))

# submit contract creation, to get contract address
eth.sendTransaction(
  {
    from: eth.accounts[0],
    data: '0x' + counterCode,
    gas: 1000000
  },
  function (err, tx) {
    console.log(err, tx)
  }
)

# check contract
eth.getCode('XXXXX')

# mine pool status
txpool.status

# mine: start, stop
miner.start()
miner.stop()

# parse abi (cat counter_sol_Counter.abi | pbcopy)
var abi = JSON.parse('XXXXX')

# JS Class wrapper of contract
var Counter = eth.contract(abi)

# instance of Counter from given address
var counter = Counter.at(contractAddr)

# read is free
counter.get()

# write costs ether
counter.increment.sendTransaction({ from: eth.accounts[0] })

miner.start()
miner.stop()

# debug transaction
debug.traceTransaction(txid)
eth.getTransaction(txid)
eth.getTransactionReceipt(txid)

```


#### Notes
* Account is created offline.

#### sample abi
```json
[
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "increment",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
]
```
