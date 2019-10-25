import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '../test-util';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Contains the content', () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
    expect(container.querySelectorAll('h2')).toHaveLength(1);
  });
});
