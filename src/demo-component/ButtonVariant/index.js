import React from 'react';
import {BasicLayout} from 'layout/BasicLayout';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'components/Button';

export const ButtonVariant = () => {
  return (
    <BasicLayout>
      <Button.Normal size="large" label="Large" />
      <Button.Normal size="medium" label="medium" />
      <Button.Normal size="small" label="small" />
      <Button.Normal
        withIconLeft={
          <IconMaterialIcons
            color="white"
            style={{marginRight: 14}}
            name="arrow-back-ios"
          />
        }
        size="large"
        label="Large"
      />
      <Button.Normal
        withIconLeft={
          <IconMaterialIcons
            color="white"
            style={{marginRight: 14}}
            name="arrow-back-ios"
          />
        }
        size="medium"
        label="medium"
      />
      <Button.Normal
        withIconLeft={
          <IconMaterialIcons
            color="white"
            style={{marginRight: 14}}
            name="arrow-back-ios"
          />
        }
        size="small"
        label="small"
      />
      <Button.Normal variant="secondary" size="large" label="Large" />
      <Button.Normal variant="secondary" size="medium" label="medium" />
      <Button.Normal variant="secondary" size="small" label="small" />
      <Button.Normal
        withIconLeft={
          <IconMaterialIcons
            color="black"
            style={{marginRight: 14}}
            name="arrow-back-ios"
          />
        }
        variant="secondary"
        size="large"
        label="Large"
      />
      <Button.Normal
        withIconLeft={
          <IconMaterialIcons
            color="black"
            style={{marginRight: 14}}
            name="arrow-back-ios"
          />
        }
        variant="secondary"
        size="medium"
        label="medium"
      />
      <Button.Normal
        withIconLeft={
          <IconMaterialIcons
            color="black"
            style={{marginRight: 14}}
            name="arrow-back-ios"
          />
        }
        variant="secondary"
        size="small"
        label="small"
      />
    </BasicLayout>
  );
};
