//ATTENTION !!! Test copier coller de : https://jestjs.io/fr/docs/tutorial-react-native

import {render, screen} from '@testing-library/react-native';
import React from 'react';
import Intro from '../components/testComponent';

test('renders correctly', async () => {
  await render(<Intro />);
  expect(screen.toJSON()).toMatchSnapshot();
});