import { FC } from 'react';

import { Box, Button, Grid, Image, Text } from 'grommet';
import { FormNext } from 'grommet-icons';

import { ServiceInfo } from '../../schema/service-info';

export type ServiceRowProps = ServiceInfo;

export const ServiceRow: FC<ServiceRowProps> = ({ name, image }) => {
  return (
    <Button plain>
      <Box width="auto" round="xsmall" background="white">
        <Grid
          pad={{ horizontal: 'medium', vertical: 'small' }}
          rows={['1/2', '1/2']}
          columns={['15%', '80%', '5%']}
          areas={[
            { name: 'leadingIcon', start: [0, 0], end: [0, 1] },
            { name: 'name', start: [1, 0], end: [1, 0] },
            { name: 'image', start: [1, 1], end: [1, 1] },
            { name: 'trailingIcon', start: [2, 0], end: [2, 1] },
          ]}
        >
          <Image alignSelf="center" gridArea="leadingIcon" src={image.icon} width={40} />
          <Text weight="bolder" size="medium" gridArea="name">
            {name}
          </Text>
          <Text size="medium" color="dark-6" gridArea="image">
            {image.tag}
          </Text>
          <Box alignSelf="center" gridArea="trailingIcon">
            <FormNext />
          </Box>
        </Grid>
      </Box>
    </Button>
  );
};
