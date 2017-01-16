import React, { PropTypes, Component } from 'react';
import { Text, ListView, View, Image } from 'react-native';
import Loading from '../../components/Loading';
import styles from './styles';

class Details extends Component {
  componentWillUpdate() {

  }

  render() {
    const { isLoading, order } = this.props;
    if (isLoading) return <Loading />;

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <ListView
        style={styles.container}
        dataSource={ds.cloneWithRows(order.baskets)}
        renderRow={(basket) => (
          <View>
            {/*<Image source={basket.logoUrl} />*/}
            <Text >
              {basket.shopName}
            </Text>
          </View>
        )}
      />
    );
  }
};

Details.propTypes = {
  isLoading: PropTypes.bool,
  order: PropTypes.object,
};

export default Details;
