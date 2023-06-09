import Container from '../Container';
import Social from '../Social';
import styles from './Header.module.scss';
import data from '../../data';

interface Props {
  title: string;
  subtitle: string;
  tagline: string;
}

export default function Header() {
  const { title, subtitle, tagline }: Props = data.header;
  return (
    <header className={styles.header}>
      <Container classes={styles.container}>
        <div className={styles.wrap}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p className="leading">{tagline}</p>
          <Social />
        </div>
      </Container>
    </header>
  );
}
