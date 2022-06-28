import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";


function Expenseitem({id, description, amount, date }) {
  const navigation = useNavigation();
  function expensePressHandler(){
    
    navigation.navigate('ManageExpense', {expenseId: id});
    
  }



  return (
    <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed}
    android_ripple={{color: GlobalStyles.colors.gray500}}>
         <View style={styles.expenseItem}>
          <View>
            {/* remember default flexDirection is always column */}
            <Text style={[styles.textBase, styles.description]}>{description}</Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>${amount}</Text>
          </View>
    </View>
    </Pressable>
   
  );
}

export default Expenseitem;

const styles = StyleSheet.create({
  pressed:{
    opacity: 0.7
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {width: 1, height: 1}, 
    shadowOpacity: 0.3, 
    shadowRadius: 4
  },
  textBase: {
    color: GlobalStyles.colors.primary50
  },
  description: {
    fontSize: 16, 
    marginBottom: 4, 
    fontWeight: 'bold'
  }, 
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6, 
  },
  amount: {
    fontWeight: 'bold'
  }
});
