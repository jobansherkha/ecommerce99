import logo from './logo.svg';
import './App.css';
import { Home } from './components/common/Home/Home';
import { Route, Routes, useLocation } from 'react-router';
import { store } from './components/common/Store';
import { Provider } from 'react-redux';
import { ProductDetails } from './components/common/Product/ProductDetails';
import { Header } from './components/common/Header/Header';
import { Cart } from './components/user/Cart/Cart';
import Alert from './components/common/Alert';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckOut } from './components/user/Checkout/CheckOut';
import { Login } from './components/user/Auth/Login';
import { Register } from './components/user/Auth/Register';
import { Orders } from './components/user/Orders';
import { MyAccount } from './components/common/Account/MyAccount';
import { ProductList } from './components/common/Product/ProductList';
import { MainLayout } from './components/admin/mainLayout/MainLayout';
import { Products } from './components/admin/components/products/Products';
import { Sidebar } from './components/admin/sidebar/Sidebar';
import { AddProduct } from './components/admin/components/addproducts/AddProducts';
import { AllOrders } from './components/admin/components/orders/AllOrders';
function App() {
  
  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert(
      // used an object inside this
      { type: type, message: message }
    );
    setTimeout(() => {
      setalert(null);
  }, 1500);
    console.log(alert)
  };
 
  return (
   <>
   
   <Provider store = {store}>
    <Header/>
    
    <Alert alert = {alert}/>
    
    <ToastContainer/>
   <Routes>
   <Route path={'/'} element = {<Home/>}/>
   <Route path={'/products'} element = {<ProductList/>}/>
   <Route path={"/product/getproduct/:id"} element={<ProductDetails/>} />
   <Route path={'/cart'} element = {<Cart/>}/>
   <Route path={'/user/checkout'} element = {<CheckOut/>}/>

   <Route path={'/user/login'} element = {<Login alert = {alert} showAlert = {showAlert}/>}/>
    <Route path={'/user/adduser'} element = {<Register alert = {alert} showAlert = {showAlert}/>}/>
    <Route path={'/user/orders'} element = {<Orders/>}/>
    <Route path={'/user/myaccount'} element = {<MyAccount/>}/>

    <Route path = {'/admin/products'} element = {<Products/>}/>
    <Route path={'/admin/addProduct'} element = {<AddProduct/>}/>
    <Route path={'/admin/orders'} element = {<AllOrders/>}/>
  

   </Routes>
   </Provider>
   </>
  );
}

export default App;
