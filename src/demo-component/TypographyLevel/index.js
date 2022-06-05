import {Text} from 'components/Text';
import {BasicLayout} from 'layout/BasicLayout';
import React from 'react';

export const TypographyLevel = () => {
  return (
    <BasicLayout>
      <Text variant="h1" label={'H1 Bold (26/Auto)'} />
      <Text variant="h2-regular" label={'H2 Regular (24/Auto)'} />
      <Text variant="h2-bold" label={'H2 Bold'} />
      <Text variant="h3-regular" label={'H3 Regular (20/Auto)'} />
      <Text variant="h3-bold" label={'H3 Bold'} />
      <Text variant="h4-regular" label={'H4 Regular (18/Auto)'} />
      <Text variant="h4-bold" label={'H4 Regular (18/Auto)'} />
      <Text variant="h4-bold" label={'H4 Regular (18/Auto)'} />
      <Text variant="p-regular" label={'Paragraph Regular (16/Auto)'} />
      <Text variant="p-bold" label={'Paragraph Regular (16/Auto)'} />
      <Text
        variant="p-small"
        label={'Small Paragraph Regular (14/20px Line-height)'}
      />
      <Text variant="p-small-bold" label={'Small Paragraph Bold'} />
      <Text variant="p-link" label={'Textlink (16/20)'} />
      <Text variant="p-label" label={'Form Title (10/12)'} />
    </BasicLayout>
  );
};
