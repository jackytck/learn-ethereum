let app = document.querySelector('#app')
const Web3 = require('web3')
const web3 = new Web3()
window.web3 = web3

web3.setProvider(
  new web3.providers.HttpProvider('http://localhost:8545')
)

window.checkBalance = async function () {
  const accounts = await web3.eth.personal.getAccounts()
  console.log('accounts', accounts)
  const balance = await web3.eth.getBalance(accounts[0])
  console.log('balance[0]', balance)
}

app.innerHTML = `
  <h2>Welcome to hello-counter</h2>
  <button
    type="button"
    onClick="checkBalance();">
    check balance
  </button>
`
