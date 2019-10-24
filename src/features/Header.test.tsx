import * as React from 'react';
import { render } from '../../test-util';

import Header from './Header';

describe('Header', () => {
  it('renders', () => {
    const { container } = render(<Header />);

    expect(container.querySelectorAll('a')).toHaveLength(2);
    expect(container.querySelectorAll('img')).toHaveLength(2);
  });
});