import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, About, Services, Projects, Contact, Error404 } from "../src/components/Pages";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
