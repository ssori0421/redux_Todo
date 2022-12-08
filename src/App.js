import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //element: path(url)에 들어갔을 때 보여줄 컴포넌트
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
