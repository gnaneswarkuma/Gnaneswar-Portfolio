import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Project } from "./pages/Project";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";


export default function Entry() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}
