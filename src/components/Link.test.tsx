import * as React from 'react';
import { render } from '../../test-util';

import Link from './Link';

describe('Link', () => {
  it('renders', () => {
    const { getByText } = render(<Link href="destination">Link Text</Link>);

    expect(getByText('Link Text')).toBeInTheDocument();
    expect(getByText('Link Text')).toContainElement(document.querySelector('a'));
    expect(getByText('Link Text')).toHaveAttribute('href', 'destination');
  });
});