import { createContainer } from 'react-native-meteor';
import Home from './Home';
import Routes from '../../config/routes';


export default createContainer((props) => ({
  onDetailsPress: () => props.navigator.push(Routes.getDetailsRoute()),
}), Home);
