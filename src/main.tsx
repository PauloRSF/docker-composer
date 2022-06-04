import React from 'react';
import ReactDOM from 'react-dom/client';

import { Grommet } from 'grommet';

import { App } from './app';

import './styles/global.scss';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Could not find the root element!');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Grommet full>
      <App />
    </Grommet>
  </React.StrictMode>
);
