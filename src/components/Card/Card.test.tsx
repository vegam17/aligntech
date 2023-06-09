import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('renders the card component', () => {
    const props = {
      icon: 'gear',
      heading: 'Example Heading',
      description: 'Example Description',
      details: ['Detail 1', 'Detail 2', 'Detail 3']
    };

    const { container, getByText } = render(<Card {...props} />);

    expect(container.firstChild).toHaveClass('card');
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(getByText('Example Heading')).toBeInTheDocument();
    expect(getByText('Example Description')).toBeInTheDocument();

    const detail1 = getByText('Detail 1');
    const detail2 = getByText('Detail 2');
    const detail3 = getByText('Detail 3');
    expect(detail1).toBeInTheDocument();
    expect(detail2).toBeInTheDocument();
    expect(detail3).toBeInTheDocument();
  });

  test('renders the card component without an icon and description', () => {
    const props = {
      heading: 'Example Heading',
      details: ['Detail 1', 'Detail 2']
    };

    const { container, queryByText } = render(<Card {...props} />);

    expect(container.firstChild).toHaveClass('card');
    expect(queryByText('Example Description')).toBeNull();
    expect(queryByText('Example Heading')).toBeInTheDocument();

    const detail1 = queryByText('Detail 1');
    const detail2 = queryByText('Detail 2');
    expect(detail1).toBeInTheDocument();
    expect(detail2).toBeInTheDocument();
  });
});
