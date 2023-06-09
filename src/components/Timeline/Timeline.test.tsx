import { render } from '@testing-library/react';
import Timeline from './Timeline';

describe('Timeline', () => {
  test('renders the timeline component', () => {
    const mockEvents = [
      {
        date: {
          from: '2021-01-01',
          to: '2022-01-01'
        },
        heading: 'Event 1',
        subheading: 'Subheading 1',
        details: ['Detail 1', 'Detail 2']
      },
      {
        date: {
          from: '2022-02-01',
          to: '2023-02-01'
        },
        heading: 'Event 2',
        subheading: 'Subheading 2',
        details: ['Detail 3']
      }
    ];

    const { container, getByText } = render(<Timeline events={mockEvents} />);

    expect(container.firstChild).toHaveClass('timeline');

    expect(getByText('Event 1')).toBeInTheDocument();
    expect(getByText('@ Subheading 1')).toBeInTheDocument();
    expect(getByText('Event 2')).toBeInTheDocument();
    expect(getByText('@ Subheading 2')).toBeInTheDocument();

    expect(getByText('Jan 2021')).toBeInTheDocument();
    expect(getByText('Jan 2022')).toBeInTheDocument();
    expect(getByText('Feb 2022')).toBeInTheDocument();
    expect(getByText('Feb 2023')).toBeInTheDocument();

    expect(getByText('Detail 1')).toBeInTheDocument();
    expect(getByText('Detail 2')).toBeInTheDocument();
    expect(getByText('Detail 3')).toBeInTheDocument();
  });

  test('renders the timeline component without details or to dates', () => {
    const mockEvents = [
      {
        date: {
          from: '2021-01-01',
          to: ''
        },
        heading: 'Event 1',
        subheading: 'Subheading 1'
      },
      {
        date: {
          from: '2022-02-01',
          to: ''
        },
        heading: 'Event 2',
        subheading: 'Subheading 2'
      }
    ];

    const { container, queryByText } = render(<Timeline events={mockEvents} />);

    // Check if the timeline component renders correctly
    expect(container.firstChild).toHaveClass('timeline');

    // Check if the timeline events are rendered correctly
    expect(queryByText('Event 1')).toBeInTheDocument();
    expect(queryByText('@ Subheading 1')).toBeInTheDocument();
    expect(queryByText('Event 2')).toBeInTheDocument();
    expect(queryByText('@ Subheading 2')).toBeInTheDocument();

    // Check if the date formatting is correct
    expect(queryByText('Jan 2021')).toBeInTheDocument();
    expect(queryByText('Jan 2022')).not.toBeInTheDocument();
    expect(queryByText('Feb 2022')).toBeInTheDocument();
    expect(queryByText('Feb 2023')).not.toBeInTheDocument();

    // Check if the details are not rendered
    expect(queryByText('Detail 1')).toBeNull();
    expect(queryByText('Detail 2')).toBeNull();
    expect(queryByText('Detail 3')).toBeNull();
  });
});
