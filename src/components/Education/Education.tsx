import Timeline from '../Timeline';
import { TEvent } from '../../types';
import data from '../../data';
import styles from './Education.module.scss';

export default function Education() {
  const education: TEvent[] = data.education;
  return (
    <aside className={styles.education}>
      <h2>Education</h2>
      <Timeline events={education} />
    </aside>
  );
}
