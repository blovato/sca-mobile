import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Details from './Details';

export default createContainer(() => ({
  detailsReady: !Meteor.subscribe('details-list').ready(),
}), Details);
