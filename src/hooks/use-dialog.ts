import { useContext } from 'react';

import { DialogContext } from '../contexts/dialog';

export const useDialog = () => useContext(DialogContext);
