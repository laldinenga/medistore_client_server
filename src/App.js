import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import AboutUs from "./customer/components/Home/AboutUs.js"; 
import Signin from "./customer/components/Home/Signin.js"
import SignUp from "./customer/components/Home/SignUp.js";
import ProductDisplay from './customer/components/Product/ProductDisplay.js';
import Fulldisplay from './customer/components/Product/Fulldisplay.js';
import Shoppingcarts from "./customer/components/Shopping_Cart/Shoppingcarts.js";
import AddItem from "./customer/components/AdminPage/AddItem.js";
import Viewitem from './customer/components/AdminPage/Viewitem.js';
import CommonDisplayProduct from './customer/components/common/CommonDisplayProduct.js';
import EditItems from './customer/components/AdminPage/EditItems.js';
import Checkout from './customer/components/Shopping_Cart/Checkout.js';
import Prescription from "./customer/components/Home/Prescription.js";



function App() {
  return (
    <main className="container mt-5">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route exact path="/navigation" element={<Navigation/>}></Route>
          <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
          <Route exact path="/signin" element={<Signin/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
          <Route exact path="/displayproduct" element={<ProductDisplay/>}></Route>
          <Route exact path="/fulldisplay" element={<Fulldisplay/>}></Route>
          <Route exact path="/shoppingcart" element={<Shoppingcarts />}></Route>
          <Route exact path="/admin/additem" element={<AddItem />}></Route>
          <Route exact path="/admin/viewitems" element={<Viewitem />}></Route>
          <Route exact path="/admin/viewitems/edititem/:id" element={<EditItems/>}></Route>
          <Route exact path="/navigateproduct/:category" element={<CommonDisplayProduct/>}></Route>
          <Route exact path="/checkout" element={<Checkout/>}></Route>
          <Route exact path="/prescription" element={<Prescription/>}></Route>
          
  
        </Routes>
      </Router>
    </main> 
  );
}

export default App;
