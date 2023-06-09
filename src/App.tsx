import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Container from './components/Container';
import data from './data';
import styles from './App.module.scss';

export default function App() {
  const { header } = data;
  return (
    <main>
      <Header
        title={header.title}
        subtitle={header.subtitle}
        tagline={header.tagline}
        social={header.social}
      />
      <Container>
        <div className={styles.columns}>
          <WorkExperience />
        </div>
      </Container>
    </main>
  );
}
