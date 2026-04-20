import Header from './components/Header';
import Slider from './components/Slider';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
