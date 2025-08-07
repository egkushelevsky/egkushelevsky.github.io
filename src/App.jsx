import { Home } from "./pages/Home"
//import { BrowserRouter, Route, Routes} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
