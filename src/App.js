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
import { Tienda } from './assets/pages/Tienda/Tienda';
import { ProductDetails } from './assets/pages/ProductDetails/ProductDetails';
import LearnPrompting from './assets/pages/Blogs/LearnPrompting';
import LearnPromptingBasics from './assets/pages/Blogs/LearnPromptingBasics';
import LearnPromptingIntermedie from './assets/pages/Blogs/LearnPromptingIntermedie';
import LearnPromptingMusic from './assets/pages/Blogs/LearnPromptingMusic';
import LearnPromptingDeteccionText from "./assets/pages/Blogs/LearnPromptingDeteccionText";
import LearnPromptingCreateImages from './assets/pages/Blogs/LearnPromptingCreateImages';
import SuperarAdicciones from './assets/pages/Blogs/SuperarAdicciones';

function App() {

  return (
    <Router>

      {/* <Header /> */}

      <main>
        <Routes>

          <Route path="/" element={<><Header /> <Home /> <Footer /></>} />
          <Route path='/blogs' element={<><Header /> <Blogs /> <Footer /></>} />
          <Route path='/blogs/chatgpt' element={<><Header /><Chatgpt /><Footer /></>} />
          <Route path='/blogs/realidadvirtual' element={<><Header /><RealidadVirtual /><Footer /></>} />
          <Route path='/blogs/el-secreto-de-la-felicidad' element={<><Header /><ComoSerFeliz /><Footer /></>} />
          <Route path='/blogs/learnprompting/introduccion' element={<><Header /><LearnPrompting /><Footer /></>} />
          <Route path='/blogs/learnprompting/basics' element={<><Header /><LearnPromptingBasics /><Footer /></>} />
          <Route path='/blogs/learnprompting/intermedio' element={<><Header /><LearnPromptingIntermedie /><Footer /></>} />
          <Route path='/blogs/learnprompting/music' element={<LearnPromptingMusic />} />
          <Route path='/blogs/learnprompting/detecciontext' element={<><Header /><LearnPromptingDeteccionText /><Footer /></>} />
          <Route path='/blogs/learnprompting/createimages' element={<><Header /><LearnPromptingCreateImages /><Footer /></>} />
          <Route path='/blogs/superaradicciones' element={<><Header /><SuperarAdicciones /><Footer /></>} />
          <Route path='/privacidad' element={<><Header /><Privacidad /><Footer /></>} />
          <Route path='/reembolso' element={<><Header /><Reembolso /><Footer /></>} />
          <Route path='/servicio' element={<><Header /><Servicio /><Footer /></>} />
          <Route path='/fernando-panduro' element={<><Header /><Conoceme /><Footer /></>} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/tienda' element={<><Header /><Tienda /><Footer /></>} />
          <Route path='/product/:id' element={<><Header /><ProductDetails /><Footer /></>} />
          
          <Route path='*' element={<Navigate replace to='/' />} />

        </Routes>
      </main>

      {/* <Footer /> */}

    </Router>
  );
}

export default App;
