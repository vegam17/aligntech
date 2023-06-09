import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  test('renders the container component with children', () => {
    const props = {
      classes: 'custom-class',
      children: <div>Example Child</div>
    };

    const { container, getByText } = render(<Container {...props} />);
    expect(container.firstChild).toHaveClass('container');
    expect(container.firstChild).toHaveClass('custom-class');
    expect(getByText('Example Child')).toBeInTheDocument();
  });

  test('renders the container component without classes', () => {
    const props = {
      children: <div>Example Child</div>
    };

    const { getByText } = render(<Container {...props} />);
    expect(getByText('Example Child')).toBeInTheDocument();
  });

  test('renders the container component with multiple children', () => {
    const props = {
      children: [
        <div key="child1">Child 1</div>,
        <div key="child2">Child 2</div>,
        <div key="child3">Child 3</div>
      ]
    };

    const { container, getByText } = render(<Container {...props} />);
    expect(container.firstChild).toHaveClass('container');
    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
    expect(getByText('Child 3')).toBeInTheDocument();
  });

  test('renders the container component with string children', () => {
    const props = {
      children: 'Example Child'
    };

    const { container, getByText } = render(<Container {...props} />);
    expect(container.firstChild).toHaveClass('container');
    expect(getByText('Example Child')).toBeInTheDocument();
  });
});
