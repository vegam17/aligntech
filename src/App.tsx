import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Container from './components/Container';
import Skills from './components/Skills';
import Footer from './components/Footer';
import styles from './App.module.scss';

export default function App() {
  return (
    <main>
      <Header />
      <Container>
        <div className={styles.columns}>
          <WorkExperience />
          <Education />
        </div>
      </Container>
      <Skills />
      <Footer />
    </main>
  );
}
