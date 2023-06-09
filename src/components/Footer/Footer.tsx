import Container from '../Container';
import useBranch from '../../utils/useBranch';
import styles from './Footer.module.scss';

export default function Footer() {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const branch = useBranch();
  return (
    <footer className={styles.footer}>
      <Container classes={styles.wrap}>
        <div>
          <p>{date}</p>
          <p>branch: {branch}</p>
        </div>
        <a
          href="https://app.circleci.com/pipelines/github/vegam17/aligntech"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://circleci.com/gh/vegam17/aligntech.svg?style=shield"
            alt="Build Status"
          />
        </a>
      </Container>
    </footer>
  );
}
