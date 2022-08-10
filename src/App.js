import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import background from './assets/images/background-1.jpg';

const backgroundStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundImage: `url(${background})`,
};

function App() {
  return (
    <div className="App" style={backgroundStyle}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
