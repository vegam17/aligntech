import { render } from '@testing-library/react';
import Social from './Social';

describe('Social', () => {
  test('renders the social component', () => {
    const { container } = render(<Social />);
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(3);
  });
});
