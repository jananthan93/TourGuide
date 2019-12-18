import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './components/Login';
import CurrentLocationMap from './components/map/map';

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  location: {screen: CurrentLocationMap},
});

const App = createAppContainer(MainNavigator);
export default App;