import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration'
import WhyHYTE from './components/WhyHYTE';
import Founder from './components/Founder';
import Mentors from './components/Mentors';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/registration" element={<Registration />} />
      <Route path='/whyhyte' element={<WhyHYTE />} />
      <Route path='/founder' element={<Founder />} />
      <Route path='/mentors' element={<Mentors />} />
    </Routes>
  );
}

export default App;
