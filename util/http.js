import axios from 'axios';

const BACKEND_URL =
  "https://expo-go-expense-tracker-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData){
    
    const response = await axios.post( BACKEND_URL +"/expenses.json",
    expenseData);
    const id = response.data.name;
    return id;
}


//sending http request is an asynchronous task 
  // that means it doesn't return immediately i.e it doesn't complete  and thats
  // why post and get return promises
export async function fetchExpenses(){
    const response = await axios.get( 
        BACKEND_URL +"/expenses.json",
    ) // GET request doesnot require  that we pass any data.

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,    
        };
        expenses.push(expenseObj);
    }

    return expenses;
}

// 

export function updateExpenseItem(id, expenseData){
//to update data we use put
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData); //backticks for templates

}

export function deleteExpenseItem(id){
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}