import { FC } from 'react';

import { Box, BoxProps, Button, List, Text } from 'grommet';

import { BoxWithTitle } from '../box-with-title';
import { ServiceInfo } from '../../schema/service-info';
import { useDialog } from '../../hooks/use-dialog';
import { AddServiceDialog } from '../add-service-dialog';
import { ServiceRow } from '../service-row';

export type ServicesListProps = BoxProps & {
  services: ServiceInfo[];
};

export const ServicesList: FC<ServicesListProps> = ({ services, ...boxProps }) => {
  const { openDialog } = useDialog();

  return (
    <BoxWithTitle {...boxProps} fill heading="Services" alignHeading="center">
      <List primaryKey="image" border={false} pad={{ vertical: 'xsmall' }} data={services}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {(service: ServiceInfo) => <ServiceRow {...service} />}
      </List>

      <Button
        primary
        size="large"
        margin={{ top: services.length ? 'small' : undefined }}
        onClick={() => openDialog(<AddServiceDialog />)}
      >
        <Box pad="small" align="center">
          <Text weight="bolder" size="large">
            Add service
          </Text>
        </Box>
      </Button>
    </BoxWithTitle>
  );
};
