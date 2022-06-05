import React from 'react';
import {View as RNView} from 'react-native';
import {ColorBaseGrayEnum} from 'styles/Colors';
import {ColorBaseEnum} from '../../styles/Colors';

const Card = (props) => {
  return (
    <RNView
      style={{
        borderRadius:
          props.variant === '4x'
            ? 4
            : props.variant === '6x'
            ? 6
            : props.variant === '12x'
            ? 12
            : props.variant === '24x'
            ? 24
            : 4,
        backgroundColor: ColorBaseGrayEnum.gray,
        width: props.width,
        height: props.height,
        shadowColor: ColorBaseEnum.black,
        shadowOffset: {
          width: 0,
          height: props.variant === '24x' ? 24 : 2,
        },
        shadowOpacity: 0.2,
        elevation: props.variant === '24x' ? 38 : 4,
      }}></RNView>
  );
};

export default Card;
