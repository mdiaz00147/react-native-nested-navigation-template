import React from 'react';
import { Text } from 'galio-framework';
import { FlatList, StyleSheet, View } from 'react-native';

import HeaderTitle from "./../components/HeaderTitle";

const S = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={S.container}>
        <HeaderTitle title="Home" />
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
            { key: 'Julie1' },
            { key: 'Julie2' },
            { key: 'Julie43' },
            { key: 'Julie4' },
            { key: 'Julie5' },
            { key: 'Julie6' },
            { key: 'Julie7' },
            { key: 'Julie8' },
            { key: 'Julie9' },
            { key: 'Julie0' },
          ]}
          renderItem={({ item }) => <Text style={S.item}>{item.key}</Text>}
        />
      </View>
    );
  }
};

export default HomeScreen;