import { Layer } from 'grommet';

import { useDialog } from '../../hooks/use-dialog';

export const DialogOverlay = () => {
  const { Component, closeDialog } = useDialog();

  if (!Component) return null;

  return (
    <Layer modal animation="fadeIn" onEsc={closeDialog} onClickOutside={closeDialog}>
      {Component}
    </Layer>
  );
};

// export const Dialog = () => {
//   const { closeDialog } = useDialog();

//   return <Box width={{ max: '500px' }} height={{ max: '500px' }} fill>

//   </Box>;
// };
