import { Home } from "./pages/Home"
import { FunStuff } from "./pages/FunStuff"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./pages/NotFound"
import { Resume } from "./pages/Resume";
import { Library } from "./pages/Library";
import { CTF } from "./pages/CTF";
import { Blog } from "./pages/Blog";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="funstuff" element={<FunStuff />} />
          <Route path="resume" element={<Resume />} />
          <Route path="funstuff/library" element={<Library />} />
          <Route path="ctf" element={<CTF />} />
          <Route path="ctf/:ctf/:category/:challenge" element={<CTF />} />
          <Route path="ctf/*" element={<Navigate to="/ctf" replace />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
