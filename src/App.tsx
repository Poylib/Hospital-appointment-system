import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
