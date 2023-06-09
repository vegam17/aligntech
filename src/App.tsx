import Header from './components/Header';
import data from './data';

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
    </main>
  );
}
