import { FC } from 'react';

import { GridProps } from 'grommet';

import { BoxWithTitle } from '../box-with-title';

export type ServicesOptionsProps = Pick<GridProps, 'gridArea'>;

export const ServicesOptions: FC<ServicesOptionsProps> = ({ gridArea }) => (
  <BoxWithTitle heading="Postgres" gridArea={gridArea} />
);
