import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Rout from './components/Rout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
