import React from 'react';
import {SkeletonThumbnail} from './Skeleton.Thumbnail';
import {View} from 'react-native';

const Skeleton = (props) => {
  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
        borderRadius: props.borderRadius,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginRight: props.marginRight,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        alignSelf: props.alignSelf,
      }}
    />
  );
};

Skeleton.Thumbnail = SkeletonThumbnail;

export default Skeleton;
