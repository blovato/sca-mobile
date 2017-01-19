import { AppRegistry } from 'react-native';
import App from './app';
import Share from './share.android';

AppRegistry.registerComponent('RNApp', () => App);
AppRegistry.registerComponent('AddToCart', () => Share);
