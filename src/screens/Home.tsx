import React from 'react';

import { View } from 'react-native';
import { Text, Button } from 'galio-framework'
import { theme, withGalio, GalioProvider } from 'galio-framework'
import { Card } from 'galio-framework';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text p muted >Home Screen</Text>
        <Button
          color="success"
          icon="checkmark-circle"
          onPress={() => this.props.navigation.navigate('Profile')}
        >
          Go to Details
          </Button>
          <Icon name="ios-apps" size={30} color="#4F8EF7" />
      </View>
    );
  }
};

export default HomeScreen;