import './App.module.css';
import {  } from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './assets/pages/Home/Home'
import { Footer } from './assets/components/Footer/Footer';
import Header from './assets/components/Header/Header';
import Blogs from './assets/pages/Blogs/Blogs';

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        
        <Route path='*' element={<Navigate replace to='/' />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
