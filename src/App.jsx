import Home from '../src/components/home';
import About from '../src/components/About';
import Services from '../src/components/Services';
import Contact from '../src/components/Contact';
import Footer from "../src/components/footer/"
import Header from './components/header';
import { GlobalStyle } from './components/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;