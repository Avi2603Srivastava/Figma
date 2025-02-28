import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.css";

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";




function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
    {/* <HomePage /> */}
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/service" element={<ServicePage/>}/>
    <Route path="/blog" element={<BlogPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>



    </Routes>
    </BrowserRouter>
  </>)
}

export default App;
