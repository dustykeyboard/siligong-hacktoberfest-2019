import * as React from 'react';
import { render } from '../../test-util';

import Logo from './Logo';

describe('Logo', () => {
  it('renders', () => {
    const { getByTitle, getByAltText } = render(<Logo image="imageURL" link="destination" title="Brand" />);

    expect(getByTitle('Brand')).toContainElement(document.querySelector('a'));
    expect(getByTitle('Brand')).toHaveAttribute('href', 'destination');

    expect(getByAltText('Brand')).toContainElement(document.querySelector('img'));
    expect(getByAltText('Brand')).toHaveAttribute('src', 'imageURL');
  });
});