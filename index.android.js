import { AppRegistry } from 'react-native';
import App from './app';
import Share from './share-extension';

AppRegistry.registerComponent('RNApp', () => App);
AppRegistry.registerComponent('AddToCart', () => Share);
