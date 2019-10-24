import * as React from 'react';
import { render } from '../../test-util';

import Welcome from './Welcome';

describe('Welcome', () => {
  it('renders', () => {
    const { container, getByText } = render(<Welcome />);

    expect(getByText('SiligongValley')).toBeInTheDocument();
    expect(container).toContainElement(document.querySelector('h1'));
    expect(container.querySelectorAll('a')).toHaveLength(2);
  });
});