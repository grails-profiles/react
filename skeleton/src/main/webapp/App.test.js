import React from 'react';
import TestRenderer from 'react-test-renderer/shallow';

import App from './App';

it('renders without crashing', () => {
  const renderer = TestRenderer.createRenderer();
  renderer.render(<App/>)
});
