import React from 'react';
import {TouchableOpacity} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {ColorSemanticPositiveEnum} from 'styles/Colors';
import {BorderRadiusEnum} from 'styles/Spacer';

export const ButtonCounter = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: ColorSemanticPositiveEnum.lighter,
        borderRadius: BorderRadiusEnum['3x'],
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}>
      <IconIonicons
        name={props.variant}
        color={ColorSemanticPositiveEnum.darker}
      />
    </TouchableOpacity>
  );
};
