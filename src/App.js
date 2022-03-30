import './App.css';
import ResponsiveAppBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import Home from './pages/Home';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
