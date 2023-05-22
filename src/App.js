import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./sceens/Home";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./sceens/MyOrder";
import SignUp2 from "./sceens/SignUp2";
import Login2 from "./sceens/Login2";
import Cart from "./sceens/Cart";

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login2/>} />
          {/* <Route exact path="/signup" element={<SignUp/>}  /> */}
          <Route exact path="/signup" element={<SignUp2/>} />
          <Route exact path="/myOrder" element={<MyOrder/>}  />
          <Route exact path="/cart" element={<Cart/>}  />
        </Routes>
      </div>
    </Router>
    
    </CartProvider>
  );
}

export default App;




