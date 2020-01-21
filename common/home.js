import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CurrentLocationMap from '../components/LocationMap';
import History from '../components/History';
import VideoStream from '../components/videostream'
import ImageContainer from '../components/ImageContainer';
import LoginMap from '../components/LoginMap';
import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import PalmyrahHouse from '../components/PalmyrahHouse';
import VayuResort from '../components/VayuResort';
import Player from '../components/screens/Player';
import MannarFort from '../components/MannarFort';

const MainNavigator = createStackNavigator({
  // splash:{screen:SplashScreen},
  welcome:{screen:HomeScreen},
  login: {screen: LoginScreen},
  location: {screen: CurrentLocationMap},
  vayuresort:{screen: VayuResort},
  palmyrahhouse:{screen: PalmyrahHouse},
  mannarFort:{screen: MannarFort},
  history:{screen: History},
  vedio:{screen:VideoStream},
  image:{screen: ImageContainer},
  nearby:{screen: LoginMap},
  sound:{screen:Player}
});

const Home = createAppContainer(MainNavigator);
export default Home;