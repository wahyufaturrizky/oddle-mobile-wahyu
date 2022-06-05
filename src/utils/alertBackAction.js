import {Alert} from 'react-native';

export const alertBackAction = (navigation) => {
  Alert.alert('Hold on!', 'Are you sure you want to go back?', [
    {
      text: 'No',
      onPress: () => null,
      style: 'cancel',
    },
    {
      text: 'YES',
      onPress: async () => {
        navigation.goBack();
      },
    },
  ]);
  return true;
};
