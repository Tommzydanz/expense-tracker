import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import EditExpense from "../EditExpense";
import Input from "./Input";
import { getFormattedDate } from "../../.././util/date";



function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {

  const [inputValues, setInputValues] = useState({
    id: '',
    description: defaultValues ? defaultValues.description : '',
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
  });


  // generic function
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function sumbitExpenseHandler(){
    const expenseData = {
      id: inputValues.id,
      description: inputValues.description, 
      amount: +inputValues.amount, //the plus is to convert the amount to number
      date: new Date(inputValues.date),
   };

   const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
   const dateIsValid = expenseData.date.toString() !== "Invalid Date";
   const descriptionIsValid = expenseData.description.trim().length > 0;

   if( !amountIsValid || !dateIsValid || !descriptionIsValid ) {  
    Alert.alert('Invalid Input', 'Please enter a valid input');
   }

   onSubmit(expenseData);
  }
  
  
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'words',
          // autoCorrect: false, //default is true
          placeholder: "Description",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <EditExpense onConfirm={sumbitExpenseHandler} onCancel={onCancel} confirmLabel={submitButtonLabel}/>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
});
