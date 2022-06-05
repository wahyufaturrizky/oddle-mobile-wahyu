import React from 'react';
import {ColorBaseGrayEnum} from 'styles/Colors';
import {BorderRadiusEnum, MarginEnum} from 'styles/Spacer';
import {Skeleton} from '../Skeleton';
import {View, Dimensions} from 'react-native';

export const SkeletonThumbnail = (props) => {
  const {height} = Dimensions.get('window');
  return (
    <View
      style={{
        flexDirection: 'column',
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
      }}>
      <Skeleton
        color={ColorBaseGrayEnum.gray300}
        width={height * 0.3}
        height={height * 0.2}
        borderRadius={BorderRadiusEnum['0.5x']}
      />
      <Skeleton
        color={ColorBaseGrayEnum.gray300}
        width={150}
        height={15}
        borderRadius={BorderRadiusEnum['0.5x']}
        marginTop={MarginEnum['2x']}
      />
      <Skeleton
        color={ColorBaseGrayEnum.gray300}
        width={200}
        height={10}
        borderRadius={BorderRadiusEnum['0.5x']}
        marginTop={MarginEnum['2x']}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Skeleton
          color={ColorBaseGrayEnum.gray300}
          width={50}
          height={10}
          borderRadius={BorderRadiusEnum['0.5x']}
          marginTop={MarginEnum['2x']}
        />
        <Skeleton
          color={ColorBaseGrayEnum.gray300}
          width={50}
          height={10}
          borderRadius={BorderRadiusEnum['0.5x']}
          marginTop={MarginEnum['2x']}
        />
      </View>
    </View>
  );
};
