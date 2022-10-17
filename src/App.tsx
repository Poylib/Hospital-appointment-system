import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Header from './components/header/Header';
import Check from './pages/Check';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservation/:id' element={<Reservation />} />
        <Route path='/check/:id' element={<Check />} />
      </Routes>
    </>
  );
}

export default App;
