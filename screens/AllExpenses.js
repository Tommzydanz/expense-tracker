import { View, Text } from 'react-native';
import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/context/expenses-context';
import { useSelector } from "react-redux";


function  AllExpenses(){

  // const expensesCtx = useContext(ExpensesContext);
  const expenseItems = useSelector((state) => state.expenseItems.expenses);


  return (
    <ExpensesOutput expenses={expenseItems} expensesPeriod="Total"
    fallbackText="No Registered Expenses Found"/>
  )
}

export default AllExpenses;

