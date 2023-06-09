import { render } from '@testing-library/react';
import Skills from './Skills';

test('Skills component renders correctly with skills data', () => {
  const { container, getByText } = render(<Skills />);

  const sectionHeading = getByText('Skills');
  expect(sectionHeading).toBeInTheDocument();

  const cards = container.getElementsByClassName('card');
  expect(cards.length).toBe(3);

  expect(getByText('Engineering')).toBeInTheDocument();
  expect(getByText('Leadership')).toBeInTheDocument();
  expect(getByText('Software')).toBeInTheDocument();

  const icons = container.getElementsByTagName('svg');
  expect(icons.length).toBe(3);
});
