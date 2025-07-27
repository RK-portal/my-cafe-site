import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import News from './components/News';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-koto-cream-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <News />
        <Access />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;