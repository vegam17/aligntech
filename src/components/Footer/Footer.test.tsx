import { render } from '@testing-library/react';
import Footer from './Footer';

jest.mock('../../utils/useBranch', () => () => 'example-branch');

describe('Footer', () => {
  test('renders the footer component', () => {
    const { container, getByText, getByAltText } = render(<Footer />);
    expect(container.firstChild).toHaveClass('footer');

    const wrap = container.querySelector('.wrap');
    expect(wrap).toBeInTheDocument();

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    expect(getByText(currentDate)).toBeInTheDocument();
    expect(getByText('branch: example-branch')).toBeInTheDocument();

    const circleciLink = getByAltText('Build Status').closest('a');
    expect(circleciLink).toHaveAttribute(
      'href',
      'https://app.circleci.com/pipelines/github/vegam17/aligntech'
    );
    expect(circleciLink).toHaveAttribute('target', '_blank');
    expect(circleciLink).toHaveAttribute('rel', 'noreferrer');

    const circleciImage = getByAltText('Build Status');
    expect(circleciImage).toHaveAttribute(
      'src',
      'https://circleci.com/gh/vegam17/aligntech.svg?style=shield'
    );
  });
});
