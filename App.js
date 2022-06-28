import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
// import ExpenseContextProvider from './store/context/expenses-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();



//nesting depends on the result you want 

function ExpensesOverview(){

  return (
    <BottomTab.Navigator
      screenOptions={ ({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => 
          <IconButton icon="add" color={tintColor} size={24}
          onPress={() => {navigation.navigate("ManageExpense")
          }}/> ,
        })}>
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => 
          (<Ionicons name="hourglass" size={size} color={color}/>),
      }}/>
      <BottomTab.Screen name='AllExpenses' component={AllExpenses} 
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => 
          <Ionicons name="calendar" size={size} color={color}/>
      }}/>
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
        <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            presentation: 'modal'
          }} >          
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} 
          options={{
            headerShown: false
          }} />
          <Stack.Screen name='ManageExpense' component={ManageExpense}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}
