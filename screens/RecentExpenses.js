import { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
// import { ExpensesContext } from '../store/context/expenses-context';
import { getDateMinusDays } from '../util/date';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses } from '../util/http';
import { setExpenses } from '../store/redux/expenses';

function  RecentExpenses(){
  // const expensesCtx = useContext(ExpensesContext);
  const expenseItems = useSelector((state) => state.expenseItems.expenses);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    async function getExpenses(){
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses));
    }

    getExpenses();
    
  }, []);
  const recentExpenses = expenseItems.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    // return true if expense date is greater than date seven days ago
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });

  return (
    <ExpensesOutput  expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText="No expenses registered for the last 7 days"/>
  )
}

export default RecentExpenses;

//Todo add the navigation needed