import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/home' element={<Shop />}></Route>
        <Route path='/order' element={<Orders />}></Route>
        <Route path='/checkout' element={<OrderReview />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>


    </div>
  );
}

export default App;