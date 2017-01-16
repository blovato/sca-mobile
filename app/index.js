import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import LoggedOut from './layouts/LoggedOut';
import LoggedIn from './layouts/LoggedIn';
import Loading from './components/Loading';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

const App = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return <Loading />;
  } else if (user !== null) {
    return <LoggedIn />;
  }
  return <LoggedOut />;
};

App.propTypes = {
  status: PropTypes.object,
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
};

export default createContainer(() => ({
  status: Meteor.status(),
  user: Meteor.user(),
  loggingIn: Meteor.loggingIn(),
}), App);
