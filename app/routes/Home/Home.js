import React, { PropTypes } from 'react';
import Meteor from 'react-native-meteor';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Home = (props) => (
  <View style={styles.container}>
    <Text style={styles.main}>
      Meteor backend is {Meteor.status().status}
    </Text>
    <Button
      text="Order"
      onPress={props.onDetailsPress}
    />
  </View>
);

Home.propTypes = {
  onDetailsPress: PropTypes.func.isRequired,
};

export default Home;
