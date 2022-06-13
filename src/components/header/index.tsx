import { FC } from 'react';

import { Button, Header as GrommetHeader } from 'grommet';
import { Download } from 'grommet-icons';

export const Header: FC = () => (
  <GrommetHeader background="brand" justify="end" pad={{ horizontal: 'large', vertical: 'medium' }}>
    <Button primary icon={<Download size="18px" />} label="Save" />
  </GrommetHeader>
);
