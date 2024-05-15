import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./customer/components/Home/AboutUs.js"; 
import Signin from "./customer/components/Home/Signin.js"
import SignUp from "./customer/components/Home/SignUp.js";
import ProductDisplay from './customer/components/Product/ProductDisplay.js';
import Fulldisplay from './customer/components/Product/Fulldisplay.js';
import Shoppingcarts from "./customer/components/Home/Shoppingcarts.js";
import AddItem from "./customer/components/AdminPage/AddItem.js";
import Viewitem from './customer/components/AdminPage/Viewitem.js';
import Display from './customer/components/Product/Display.js';
import Items from './customer/components/Home/Items.js';


function App() {
  return (
    <main className="container mt-5">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
          <Route exact path="/signin" element={<Signin/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
          <Route exact path="/displayproduct" element={<ProductDisplay/>}></Route>
          <Route exact path="/fulldisplay" element={<Fulldisplay/>}></Route>
          <Route exact path="/shoppingcart" element={<Shoppingcarts />}></Route>
          <Route exact path="/admin/additem" element={<AddItem />}></Route>
          <Route exact path="/admin/viewitems" element={<Viewitem />}></Route>
          <Route exact path="/users/displayitems" element={<Display />}></Route>
          <Route exact path="/users/items" element={<Items />}></Route>
        </Routes>
      </Router>
    </main> 
  );
}

export default App;