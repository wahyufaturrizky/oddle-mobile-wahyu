import {Button} from 'components/Button';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {View} from 'react-native';
import {ColorBaseEnum, ColorPrimaryEnum} from 'styles/Colors';

const NavbarRight = (props) => {
  if (props.type === 'Calendar') {
    return (
      <View style={{marginHorizontal: 12}}>
        <Button.Link
          onPress={props.onPress}
          variant="navbar"
          bgColor={ColorPrimaryEnum.yellow}>
          <IconIonicons name="calendar" color={ColorBaseEnum.white} />
        </Button.Link>
      </View>
    );
  } else if (props.type === 'More') {
    return (
      <View style={{marginHorizontal: 12}}>
        <Button.Link onPress={props.onPress}>
          <IconMaterialIcons name="expand-more" />
        </Button.Link>
      </View>
    );
  }

  return (
    <View style={{marginHorizontal: 12}}>
      <Button.Link
        onPress={props.onPress}
        variant="navbar"
        bgColor={ColorPrimaryEnum.yellow}>
        <IconIonicons name="calendar" color={ColorBaseEnum.white} />
      </Button.Link>
    </View>
  );
};

export default NavbarRight;
