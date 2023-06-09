import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Container from './components/Container';
import styles from './App.module.scss';

export default function App() {
  return (
    <main>
      <Header />
      <Container>
        <div className={styles.columns}>
          <WorkExperience />
        </div>
      </Container>
    </main>
  );
}
