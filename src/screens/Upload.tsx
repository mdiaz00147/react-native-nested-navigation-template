import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'galio-framework'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HeaderTitle from "./../components/HeaderTitle";

const S = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  content:{
    height: hp('100%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' 
  }
});


class UploadScreen extends React.Component {
  render() {
    return (
      <View style={S.container}>
        <HeaderTitle title="Upload" />
        <View style={S.content}><Text h5 italic>Upload Screen</Text></View>
      </View>
    );
  }
}

export default UploadScreen;