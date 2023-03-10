import './App.module.css';
import {  } from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './assets/pages/Home/Home'
import { Footer } from './assets/components/Footer/Footer';
import Header from './assets/components/Header/Header';
import Blogs from './assets/pages/Blogs/Blogs';
import Chatgpt from './assets/pages/Blogs/Chatgpt';
import RealidadVirtual from './assets/pages/Blogs/RealidadVirtual';
import Privacidad from './assets/pages/Terminos/Privacidad';
import Reembolso from './assets/pages/Terminos/Reembolso';
import Servicio from './assets/pages/Terminos/Servicio';
import Conoceme from './assets/pages/Conoceme/Conoceme';
import PortfolioPage from './assets/pages/Portfolio/PortfolioPage';
import ComoSerFeliz from './assets/pages/Blogs/ComoSerFeliz';

function App() {
  return (
    <Router>

      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/chatgpt' element={<Chatgpt />} />
          <Route path='/blogs/realidadvirtual' element={<RealidadVirtual />} />
          <Route path='/blogs/el-secreto-de-la-felicidad' element={<ComoSerFeliz />} />
          <Route path='/privacidad' element={<Privacidad />} />
          <Route path='/reembolso' element={<Reembolso />} />
          <Route path='/servicio' element={<Servicio />} />
          <Route path='/fernando-panduro' element={<Conoceme />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          
          <Route path='*' element={<Navigate replace to='/' />} />

        </Routes>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
