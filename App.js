import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './components/Login';
import CurrentLocationMap from './components/map/map';
// import ImagePalmyrah from './components/Palmyrah/Image/imagePalmyrah';
// import ImageVayuresort from './components/VayuResort/Image/imageVayuresort';
// import SoundPalmyrah from './components/Palmyrah/audio';

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  location: {screen: CurrentLocationMap},
});

const App = createAppContainer(MainNavigator);
export default App;