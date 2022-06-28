import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../.././constants/styles";

function Input({ label, invalid, textInputConfig, style }) {

  let  inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
      inputStyles.push(styles.inputMultiline);
  }

  if(invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    padding: 6,
    borderRadius: 6,
    borderWidth: 2,
    fontSize: 18,
    color: GlobalStyles.colors.primary500,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
