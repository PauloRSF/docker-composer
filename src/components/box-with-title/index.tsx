import { FC, PropsWithChildren } from 'react';

import { Box, BoxProps, Text } from 'grommet';
import { AlignSelfType } from 'grommet/utils';

export type BoxWithTitleProps = BoxProps &
  PropsWithChildren<{
    heading: string;
    alignHeading?: AlignSelfType;
  }>;

export const BoxWithTitle: FC<BoxWithTitleProps> = ({
  heading,
  alignHeading,
  children,
  ...boxProps
}) => (
  <Box {...boxProps}>
    <Text
      size="xxlarge"
      weight="bolder"
      color="dark-3"
      margin={{ bottom: 'medium' }}
      alignSelf={alignHeading}
    >
      {heading}
    </Text>
    <Box fill background="light-2" round="xsmall" pad="medium">
      {children}
    </Box>
  </Box>
);
