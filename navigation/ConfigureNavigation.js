import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DefineDay from '../screens/DefineDay';
import DefineCycle from '../screens/DefineCycle';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';

const ConfigureNavigation = createStackNavigator({
  Login: Login,
  HomeScreen: HomeScreen,
  DefineDay: DefineDay,
  DefineCycle: DefineCycle,
});

export default createAppContainer(ConfigureNavigation);
