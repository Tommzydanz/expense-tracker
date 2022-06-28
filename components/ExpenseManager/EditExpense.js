
import { View, Text, Button, StyleSheet } from "react-native";

import ManagerButton from "../UI/ManagerButton";

function EditExpense({confirmLabel, onCancel, onConfirm}) {

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <ManagerButton mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </ManagerButton>
        <ManagerButton onPress={onConfirm} style={styles.button}>
          {confirmLabel}
        </ManagerButton>
      </View>
    </View>
  );
}

export default EditExpense;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
