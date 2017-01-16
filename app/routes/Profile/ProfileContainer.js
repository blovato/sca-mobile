import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';

export default createContainer(() => ({
  user: Meteor.user(),
  signOut: Meteor.logout(),
}), Profile);
