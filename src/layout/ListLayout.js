import React from 'react';
import {View} from 'react-native';
import {MarginEnum} from 'styles/Spacer';

export const ListLayout = (props) => (
  <View style={{flex: 1, paddingBottom: MarginEnum['6x']}}>
    {props.children}
  </View>
);
