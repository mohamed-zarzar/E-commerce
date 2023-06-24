import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router';
import CurrentProduct from './pages/CurrentProduct';
import Shop from './pages/Shop';
import MyProductBying from './pages/MyProductBying';
import About from './pages/About';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/currentProduct' element={<CurrentProduct/>}/>
        <Route path='/myProductBuing' element={<MyProductBying/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
