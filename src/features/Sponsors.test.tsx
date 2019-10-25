import * as React from 'react';
import { render } from '../../test-util';

import Sponsors from './Sponsors';

describe('Sponsors', () => {
  it('renders', () => {
    const { getByText } = render(<Sponsors />);

    expect(getByText('Accelo')).toBeInTheDocument();
    expect(getByText('Accelo')).toHaveAttribute(
      'href',
      'https://www.accelo.com/'
    );
  });
});
