import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CurrentLocationMap from '../components/LocationMap';
import History from '../components/History';
import VideoStream from '../components/videostream'
import ImageContainer from '../components/ImageContainer';
import LoginMap from '../components/LoginMap';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import AudioStream from '../components/audioStream'
import VayuResortScreen from '../components/screens/VayuResortScreen';
import PalmyrahScreen from '../components/screens/PalmyrahScreen';

const MainNavigator = createStackNavigator({
  // splash:{screen:SplashScreen},
  welcome:{screen:HomeScreen},
  login: {screen: LoginScreen},
  location: {screen: CurrentLocationMap},
  vayuresort:{screen: VayuResortScreen},
  palmyrahhouse:{screen: PalmyrahScreen},
  history:{screen: History},
  vedio:{screen:VideoStream},
  image:{screen: ImageContainer},
  nearby:{screen: LoginMap},
  sound:{screen:AudioStream}
});

const Home = createAppContainer(MainNavigator);
export default Home;