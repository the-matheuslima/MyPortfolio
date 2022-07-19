import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/about"
import Resume from "./pages/resume"
import NavBar from "./components/navbar"
import Projects from "./pages/projects"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
