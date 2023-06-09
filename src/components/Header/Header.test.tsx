import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders the header component', () => {
    const { container, getByText } = render(<Header />);
    expect(container.firstChild).toHaveClass('header');

    const h1 = getByText('Miguel Vega-Herrera');
    expect(h1.tagName).toBe('H1');

    const h2 = getByText('Software Engineer');
    expect(h2.tagName).toBe('H2');
  });
});
