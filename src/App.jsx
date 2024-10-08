import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About"
import Layout from "./Layout";
import Home from "./components/home/Home";



function App() {
 

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>page not found</div>}></Route>
     
      </Route>
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App
