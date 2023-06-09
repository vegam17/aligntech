import { render } from '@testing-library/react';
import WorkExperience from './WorkExperience';

describe('WorkExperience', () => {
  test('renders the education component', () => {
    const { container, getByText } = render(<WorkExperience />);

    expect(getByText('Work Experience')).toBeInTheDocument();

    const timeline = container.querySelector('.timeline');
    expect(timeline).toBeInTheDocument();

    const eventHeadings = [
      'Senior Frontend Engineer',
      'Software Engineer III',
      'Senior Web Developer',
      'Software Engineer'
    ];
    eventHeadings.forEach((heading) => {
      expect(getByText(heading)).toBeInTheDocument();
    });

    const detailsLists = container.querySelectorAll('ul');
    expect(detailsLists.length).toBe(4);
  });
});
