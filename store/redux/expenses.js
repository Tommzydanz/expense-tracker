import { createSlice} from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-05-29')
    },
    {
        id: 'e2',
        description: 'A power bank',
        amount: 69.79,
        date: new Date('2022-06-11')
    },
    {
        id: 'e3',
        description: 'A pair of slides',
        amount: 8.59,
        date: new Date('2022-06-15')
    },
    {
        id: 'e4',
        description: 'A game console',
        amount: 40.99,
        date: new Date('2022-06-14')
    },
    {
        id: 'e5',
        description: 'A pair of gloves',
        amount: 59.99,
        date: new Date('2022-06-17')
    },
    {
        id: 'e6',
        description: 'A charger',
        amount: 69.79,
        date: new Date('2022-06-17')
    },
    {
        id: 'e7',
        description: 'A chocolate bar',
        amount: 8.59,
        date: new Date('2022-07-20')
    },
    {
        id: 'e8',
        description: 'A game port',
        amount: 40.99,
        date: new Date('2022-06-21')
    },
]

export const expenseSlice = createSlice({
    name: "expenses",
    initialState: {
        expenses: DUMMY_EXPENSES,
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.unshift(action.payload);
        },
        updateExpense: (state, action) => {
            const updatableIndex = state.expenses.findIndex((expense) => expense.id === action.payload.id);
            state.expenses.splice(updatableIndex, 1, action.payload);
        },
        deleteExpense: (state, action) => {
            return {
                // ...state,
                // expenses: [...state.expenses].filter((expense) => expense.id !== action.payload.id)
                expenses: state.expenses.filter((expense) => expense.id !== action.payload.id)
            };
        }, 
    }
});



export const addExpense = expenseSlice.actions.addExpense;
export const updateExpense = expenseSlice.actions.updateExpense;
export const deleteExpense = expenseSlice.actions.deleteExpense;
export default expenseSlice.reducer;