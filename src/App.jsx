import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Rout from './Component/Rout';

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
