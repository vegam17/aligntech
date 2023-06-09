import branch from '../../data/branch.json';
import Container from '../Container';
import styles from './Footer.module.scss';

export default function Footer() {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <footer className={styles.footer}>
      <Container classes={styles.wrap}>
        <div>
          <p>{date}</p>
          <p>{branch.name}</p>
        </div>
        <img src="https://circleci.com/gh/vegam17/aligntech.svg?style=shield" />
      </Container>
    </footer>
  );
}
