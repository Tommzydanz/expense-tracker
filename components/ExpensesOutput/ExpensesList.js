import { FlatList } from "react-native";
import Expenseitem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    // we can just spread all our item properties into the expense item
    // spread raw data into expense item
    // {...item.item} syntax will then expand your raw data.
    return <Expenseitem {...itemData.item}/>
}


function ExpensesList({ expenses }) {
    return <FlatList data={expenses} 
    renderItem={renderExpenseItem}
    keyExtractor={(item) => item.id}/>
}

export default ExpensesList;