import './App.css';

import SideNav from './AllPagesComponents/SideNav/SideNav';
import ViewModal from './CommonComponents/Modal/ViewModal/ViewModal';
import Product from './Pages/Admin/AdminProduct';
import Home from './Pages/Home/Home';

import { Route, Routes } from 'react-router-dom';
import Categories from './Pages/Admin/Category';


function App() {

  return (
    <div className='container'>
      <div className="container_inner">
        <div className="left_panel">
          <SideNav />
        </div>
        <div className="right_panel">
          <Routes>
            <Route path='/admin' element={<Home />} />
            <Route path='/admin/product' element={<Product />} />
            <Route path='/admin/categories' element={<Categories />} />
            <Route path="/ViewModal" element={<ViewModal />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

