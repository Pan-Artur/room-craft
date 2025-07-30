import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Main } from './pages/Main/Main';
import { Build } from './pages/Build/Build';

// Для локальної розробки використовуємо '/', для GitHub Pages - '/room-craft/'
const basename = process.env.NODE_ENV === 'production' ? '/' : '/room-craft';

export const App = () => {
  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/build" element={<Build />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};