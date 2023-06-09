import { render } from '@testing-library/react';
import Education from './Education';

describe('Education', () => {
  test('renders the education component', () => {
    const { container, getByText } = render(<Education />);

    expect(container.firstChild).toHaveClass('education');
    expect(getByText('Education')).toBeInTheDocument();

    const timeline = container.querySelector('.timeline');
    expect(timeline).toBeInTheDocument();

    const eventHeadings = [
      'M.S. Software Engineering',
      'M.S. Network Technology',
      'B.S. Industrial Technology',
      'A.S. Computer Information Technology'
    ];
    eventHeadings.forEach((heading) => {
      expect(getByText(heading)).toBeInTheDocument();
    });
  });
});
