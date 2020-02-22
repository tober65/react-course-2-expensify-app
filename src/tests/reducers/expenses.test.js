import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

const newExpense = {
    id: '4',
    description: 'Apples',
    note: '',
    amount: 500,
    createdAt: 2000
}

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], newExpense]);
});

test('should edit expense by id', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});