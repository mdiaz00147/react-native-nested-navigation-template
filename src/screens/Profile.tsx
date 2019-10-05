import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'galio-framework'

import HeaderTitle from "./../components/HeaderTitle";

const S = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});


class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={S.container}>
        <HeaderTitle title="Profile" />
        <Text onPress={() => this.props.navigation.navigate('Screen1')} h1 italic>Ariana Careta</Text>
      </View>
    );
  }
}

export default ProfileScreen;