import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from './pages/Main'
import About from './pages/About';
import Contact from './pages/Contact';
import  Navbar  from './components/Navbar'
import Resume from './components/Resume'


function App() {

  return (
    <BrowserRouter>
    <div className="App flex flex-col min-h-screen overflow-x-hidden bg-gray-900 text-gray-100 scroll-smooth overflow-hidden">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about/" element={<About />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="resume/" element={<Resume />} />
        <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App
