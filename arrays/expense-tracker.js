const account = {
    name: 'Jeff Slavin',
    expenses: [],
    income: [],

    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    }, 

    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;

        this.expenses.forEach(function(item, index) {
            totalExpenses += item.amount;
        });

        this.income.forEach(function(item, index) {
            totalIncome += item.amount;
        });

        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
    }
}

account.addIncome('Job', 1000);
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.getAccountSummary());
console.log(account);