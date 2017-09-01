let app = document.querySelector('#app')
const Web3 = require('web3')
const counterAbi = require('./counter_sol_Counter_abi.json')

const web3 = new Web3()
window.web3 = web3

web3.setProvider(
  new web3.providers.HttpProvider('http://localhost:8545')
)

const contractAddr = '0xe0eFe5A616bB02eb08fcfD8B2e7C1c352dbd53A6'
const fromAccount = '0xc24c0B1211aD426AE109dDEE4a0D1178E37c3ECe'

const counterContract = new web3.eth.Contract(
  counterAbi,
  contractAddr
)
window.counterContract = counterContract

window.checkBalance = async function () {
  const accounts = await web3.eth.personal.getAccounts()
  console.log('accounts', accounts)
  const balance = await web3.eth.getBalance(accounts[0])
  console.log('balance[0]', balance)
}

window.checkCounter = async function () {
  const count = await counterContract.methods.get().call()
  document.getElementById('counterValue').innerText = count
}

window.incrementCounter = async function () {
  await counterContract.methods.increment().send({
    from: fromAccount,
    gas: 1000000
  })
}

app.innerHTML = `
  <h2>Welcome to hello-counter</h2>
  <div>The counter value is:
    <tt id="counterValue"></tt>
  </div>
  <button
    type="button"
    onClick="checkCounter();">
    check counter
  </button>
  <button
    type="button"
    onClick="incrementCounter();">
    increment counter
  </button>
`
