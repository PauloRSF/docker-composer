import { FC } from 'react';

import { Box, BoxProps, Button, Text } from 'grommet';

import { BoxWithTitle } from '../box-with-title';
import { ServiceInfo } from '../../schema/service-info';

export type ServicesListProps = BoxProps & {
  services: ServiceInfo[];
};

export const ServicesList: FC<ServicesListProps> = ({ services, ...boxProps }) => (
  <BoxWithTitle {...boxProps} fill heading="Services" alignHeading="center">
    <Button primary margin={{ top: services.length ? 'small' : undefined }} size="large">
      <Box pad="small" align="center">
        <Text weight="bolder" size="large">
          Add service
        </Text>
      </Box>
    </Button>
  </BoxWithTitle>
);
