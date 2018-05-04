const getExpensesTotal = (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;

    return expenses.reduce(reducer, 0);
};

export default getExpensesTotal;