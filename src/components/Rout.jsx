import { Routes, Route } from 'react-router-dom';
// import Hero from './Home_page/Hero.jsx';
// import Home from './Home_page/Home.jsx';
import Routhome from './Home_page/Routhome.jsx';
// import Herohome from './Home_page/Herohome.jsx';
// import Routhome from './Home_page/Routhome.jsx';

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Routhome />} />
    </Routes>
  );
}

export default Rout;
