import Container from '../Container';
import Card from '../Card';
import { TSkill } from '../../types';
import data from '../../data';
import styles from './Skills.module.scss';

export default function Skills() {
  const skills: TSkill[] = data.skills || [];

  return (
    <section className={styles.skills}>
      <Container>
        <h2>Skills</h2>
        <div className={styles.skillsWrap}>
          {skills.map((skill) => (
            <Card
              key={skill.heading}
              icon={skill.icon}
              heading={skill.heading}
              description={skill.description}
              details={skill.details || []}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
