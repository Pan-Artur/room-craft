import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './pages/Main/Main';
import { Build } from './pages/Build/Build';

const basename = process.env.PUBLIC_URL || '/';

export const App = () => {
  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path="build" element={<Build />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};