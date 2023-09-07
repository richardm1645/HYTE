import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration'

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
