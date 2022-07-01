import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ExpenseManager/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
// import { ExpensesContext } from '../store/context/expenses-context';
import { useDispatch, useSelector } from "react-redux";
import {
  updateExpense,
  addExpense,
  deleteExpense,
} from "../store/redux/expenses";
import { storeExpense, updateExpenseItem, deleteExpenseItem } from "../util/http";



function ManageExpense({ route, navigation }) {
  //for routing or passing parameters
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const dispatch = useDispatch();

  const expenseItems = useSelector((state) => state.expenseItems.expenses);

  const expenseItemsId = expenseItems.find(expense => expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  //

  async function deleteExpenseHandler() {
    dispatch(deleteExpense({ id: editedExpenseId }));
    await deleteExpenseItem(editedExpenseId);
    // expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    
    if (isEditing) {
      await updateExpenseItem(editedExpenseId, expenseData);
      dispatch(
        updateExpense({
        ...expenseData, id: editedExpenseId})
      );
      
    } else {
      const id = await storeExpense(expenseData);
      dispatch(
        addExpense(
           {...expenseData, id: id}));
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues= {expenseItemsId}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
