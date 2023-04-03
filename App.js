import logo from './logo.svg';
import './App.css';
import HomepageDonate from "./HomepageDonate";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Books from './Books';
import Clothes from './Clothes';
import Foods from './Foods';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import About from './About';
import Bookview from './Bookview';
import ClotheView from './ClotheView';
import FoodView from './FoodView';
function App() {
  return (

     
     <BrowserRouter>
    <Routes>
    <Route  path="/"  element={<HomepageDonate/>}></Route>
    <Route  path="/Books"  element={<Books/>}></Route>
    <Route  path="/Clothes"  element={<Clothes/>}></Route>
    <Route  path="/Foods"  element={<Foods/>}></Route>
    <Route  path="/Login"  element={<Login/>}></Route>
    <Route  path="/Register"  element={<Register/>}></Route>
    <Route  path="/Contact"  element={<Contact/>}></Route>
    <Route  path="/About"  element={<About/>}></Route>
    <Route  path="/Bookview"  element={<Bookview/>}></Route>
    <Route  path="/ClotheView"  element={<ClotheView/>}></Route>
    <Route  path="/FoodView"  element={<FoodView/>}></Route>
    </Routes>
      </BrowserRouter>
    
  );
}

export default App;
