
import InputColors from "./pages/InputColors"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {

  const [image, setImage] = useState<string>('');

  const storeImage = (file: string) => {
    setImage(file);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home uploadFile={storeImage} />} />
          <Route path="/inputColors" element={<InputColors imageData={image} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
