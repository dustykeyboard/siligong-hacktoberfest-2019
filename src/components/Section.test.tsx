import * as React from 'react';
import { render } from '../../test-util';

import Section from './Section';

describe('Section', () => {
  it('renders', () => {
    const { getByText } = render(<Section>Section</Section>);

    expect(getByText('Section')).toBeInTheDocument()
    expect(getByText('Section')).toContainElement(document.querySelector('section'));
  });
});