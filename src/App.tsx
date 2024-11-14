
import InputColors from "./pages/InputColors"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inputColors" element={<InputColors />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
