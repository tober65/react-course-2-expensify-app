import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('test expensesTotal with an empty array', () => {
    const totalCost = expensesTotal([]);

    expect(totalCost).toBe(0);
});

test('test expensesTotal with asingle expense', () => {
    const totalCost = expensesTotal([expenses[0]]);

    expect(totalCost).toBe(expenses[0].amount);
});

test('test expensesTotal with an array of expenses', () => {
    const totalCost = expensesTotal(expenses);

    expect(totalCost).toBe(114195);
});