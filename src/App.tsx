import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Header from './components/header/Header';
import Check from './pages/Check';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dateinput/:id' element={<Appointment />} />
        <Route path='/infoinput/:id' element={<UserInfo />} />
        <Route path='/check/:id' element={<Check />} />
      </Routes>
    </>
  );
}

export default App;
