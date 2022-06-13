import { Box, Button, Heading, Select, TextInput } from 'grommet';

import { useDialog } from '../../hooks/use-dialog';

export const AddServiceDialog = () => {
  const { closeDialog } = useDialog();

  return (
    <Box pad={{ vertical: 'large', horizontal: 'xlarge' }}>
      <Heading level={2} margin="none">
        Add service
      </Heading>
      <Box margin={{ top: 'large' }}>
        <TextInput placeholder="Service name" />
      </Box>
      <Box margin={{ top: 'medium' }}>
        <TextInput placeholder="Image name" />
      </Box>
      <Box margin={{ top: 'medium' }}>
        <Select
          disabled
          options={[]}
          placeholder="Tag"
          emptySearchMessage="No tags found for this image"
        />
      </Box>
      <Box direction="row" justify="between" margin={{ top: 'large' }}>
        <Button primary size="large" label="Confirm" />
        <Button size="large" label="Cancel" onClick={closeDialog} />
      </Box>
    </Box>
  );
};
