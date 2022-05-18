import { render } from '@testing-library/react';

import { App } from '.';

it('does nothing', () => {
  render(<App />);

  expect(1).toBe(1);
});
