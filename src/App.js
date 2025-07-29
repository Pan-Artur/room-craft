import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Main } from './pages/Main/Main';
import { Build } from './pages/Build/Build';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>Головна</Route>
          <Route path="/build" element={<Build />}>Редактор</Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}