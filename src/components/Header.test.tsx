import * as React from 'react';
import { render } from '../../test-util';

import Header from './Header';

describe('Header', () => {
  it('renders', () => {
    const { getByText } = render(<Header>Header</Header>);

    expect(getByText('Header')).toBeInTheDocument()
    expect(getByText('Header')).toContainElement(document.querySelector('header'));
  });
});