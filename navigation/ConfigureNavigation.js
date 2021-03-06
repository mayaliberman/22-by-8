import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DefineDay from '../screens/DefineDay';
import DefineCycle from '../screens/DefineCycle';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';
import ProductiveListUpdate from '../screens/ProductiveListUpdate';
import ProductiveList from '../screens/ProductiveList';
import SingleCycle from '../screens/SingleCycle';
import CountdownScreen from '../screens/CountdownScreen';
const ConfigureNavigation = createStackNavigator(
  {
    Login: Login,
    HomeScreen: HomeScreen,
    DefineDay: DefineDay,
    DefineCycle: DefineCycle,
    ListUpdate: ProductiveListUpdate,
    ProductiveList: ProductiveList,
    SingleCycle: SingleCycle,
    Count: CountdownScreen,
  },
  {
    // mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

export default createAppContainer(ConfigureNavigation);
