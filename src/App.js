import "./App.css";
import NavBar from "./component/NavBar";
import { Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import FetchAPIData from "./component/FetchAPIData";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import FeaturedProduct from "./component/FeaturedProduct";
import NewProduct from "./component/NewProduct";


const App = () => {
  return <>
  <NavBar />
  <Routes>
        <Route index element={<Home />} />
        <Route path="/FetchAPIData" element={<FetchAPIData />} />
        <Route path="/Products" element={<Products />} >
        {/* <Route index element={<FeaturedProduct />} /> */}
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route> 
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
  </Routes>
  </>
}

export default App;
