import Meteor, { createContainer } from 'react-native-meteor';
import Details from './Details';

export default createContainer(() => ({
  isLoading: !Meteor.subscribe('Orders.inUniversalCart').ready(),
  order: Meteor.collection('orders').findOne({}),
}), Details);
