import React from 'react';
import {View} from 'react-native';

export const Col = (props) => {
  return (
    <View
      style={{
        flex: props.size,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        marginHorizontal: props.marginHorizontal,
      }}>
      {props.children}
    </View>
  );
};
