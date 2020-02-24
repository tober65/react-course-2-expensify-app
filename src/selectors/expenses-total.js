export default (expenses) => {
    return expenses.reduce((totalExpenses, expense) => {
        return totalExpenses + expense.amount;
    }, 0);
}