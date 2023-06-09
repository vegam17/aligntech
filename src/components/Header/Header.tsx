import Container from '../Container';
import Social from '../Social';
import styles from './Header.module.scss';
import { TSocial } from '../../types';

interface Props {
  title: string;
  subtitle: string;
  tagline: string;
  social: TSocial[];
}

export default function Header({ title, subtitle, tagline, social }: Props) {
  return (
    <header className={styles.header}>
      <Container classes={styles.container}>
        <div className={styles.wrap}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p className="leading">{tagline}</p>
          <Social social={social} />
        </div>
      </Container>
    </header>
  );
}
