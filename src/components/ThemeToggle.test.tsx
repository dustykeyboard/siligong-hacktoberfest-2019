import * as React from 'react';
import { render, fireEvent } from '../../test-util';

import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  it('renders light, toggles', () => {
    const toggleSpy = jest.fn()
    const { getByText } = render(<ThemeToggle theme="light" toggleTheme={toggleSpy} />);

    expect(getByText('😎')).toBeInTheDocument();
    fireEvent['click'](getByText('😎'));

    expect(toggleSpy).toHaveBeenCalled();
  });

  it('renders dark, toggles', () => {
    const toggleSpy = jest.fn()
    const { getByText } = render(<ThemeToggle theme="dark" toggleTheme={toggleSpy} />);

    expect(getByText('🌚')).toBeInTheDocument();
    fireEvent['click'](getByText('🌚'));

    expect(toggleSpy).toHaveBeenCalled();
  });
});