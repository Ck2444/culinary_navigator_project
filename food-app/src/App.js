import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Routes>

          <Route exct path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
