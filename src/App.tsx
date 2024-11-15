
import InputColors from "./pages/InputColors"
import OutputColors from "./pages/OutputColors"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {

  const [image, setImage] = useState<string>('');
  const [data, setData] = useState();

  const storeImage = (file: string) => {
    setImage(file);
  }

  const storeData = (obj: any) => {
    setData(obj);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home uploadFile={storeImage} />} />
          <Route path="/inputColors" element={<InputColors imageData={image} handleData={storeData} />} />
          <Route path="/outputColors" element={<OutputColors colorData={data} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
