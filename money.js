let transactionsList = []

const addTransaction = function(task, amount) {
    amount = Number(amount)
    transactionsList.push({ task, amount });
    calculateTotal()
}

function calculateTotal() {
    let income = 0
    let expenses = 0
    let balance = 0
    
    for (let transaction of transactionsList) {
        if (transaction.task === 'income') {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }
    }

    balance = income - expenses
    displaySummary(income, expenses, balance)
}

function displaySummary(income, expenses, balance) {
    console.log(`Your current balance is ${balance} with ${income} income and ${expenses} expenses`)
}

var submit = document.getElementById('submitButton')
submit.addEventListener('click', () => {
    const task = document.getElementById('task').value
    const amount = document.getElementById('amount').value
    addTransaction(task, amount)
})