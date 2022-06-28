import { createContext, useReducer } from "react";


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
        date: new Date('2022-06-18')
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-06-16')
    },
    {
        id: 'e6',
        description: 'A power bank',
        amount: 69.79,
        date: new Date('2022-06-16')
    },
    {
        id: 'e7',
        description: 'A pair of slides',
        amount: 8.59,
        date: new Date('2022-06-19')
    },
    {
        id: 'e8',
        description: 'A game port',
        amount: 40.99,
        date: new Date('2022-06-21')
    },
]


export const ExpensesContext = createContext({  
     expenses: [],
     addExpense: ({ description, amount, date }) => {
     },
     deleteExpense: (id) => {},
     updateExpense: (id, {description, amount, date}) => {},
});




function expensesReducer(state, action){
    switch(action.type){   
         //expense typeof    action.amount ===   'number'
        case 'ADD':
            const id = new Date().toString + Math.random().toString();
            return [{...action.payload, id: id}, ...state, ]; 
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}


function ExpenseContextProvider({ children}){  

    const[expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData){   
    dispatch({ type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData){   
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData }});
    }

    // construct a value object to bundle all our data and function here together
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value} >
        {children}
    </ExpensesContext.Provider>
}


export default ExpenseContextProvider;