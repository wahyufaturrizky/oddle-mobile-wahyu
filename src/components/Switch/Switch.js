import React, {useState} from 'react';
import {Switch as RNTSwitch} from 'react-native';
import {
  ColorBaseEnum,
  ColorPrimaryEnum,
  ColorBaseGrayEnum,
} from 'styles/Colors';

const Switch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <RNTSwitch
      trackColor={{
        false: ColorBaseGrayEnum.gray500,
        true: ColorPrimaryEnum.redOpacity,
      }}
      thumbColor={isEnabled ? ColorPrimaryEnum.red : ColorBaseGrayEnum.gray100}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default Switch;
