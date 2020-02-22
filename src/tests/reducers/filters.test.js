import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const textString = 'test text filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text: textString
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(textString);
});

test('should set startDate', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});