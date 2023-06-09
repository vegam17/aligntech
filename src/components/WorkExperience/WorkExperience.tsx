import Timeline from '../Timeline';
import { TEvent } from '../../types';
import data from '../../data';

export default function WorkExperience() {
  const work: TEvent[] = data.work;
  return (
    <section>
      <h2>Work Experience</h2>
      <Timeline events={work} />
    </section>
  );
}
