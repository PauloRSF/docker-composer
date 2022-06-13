import { Grommet } from 'grommet';

import { DialogContextProvider } from '../contexts/dialog';
import { DialogOverlay } from '../components/dialog';
import { HomePage } from '../pages/home';

export const App = () => (
  <Grommet full>
    <DialogContextProvider>
      <HomePage />
      <DialogOverlay />
    </DialogContextProvider>
  </Grommet>
);
