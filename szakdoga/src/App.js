import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./frontend/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./frontend/components/Pages/Page";
import Page2 from "./frontend/components/Pages/Page2";
import Page0 from "./frontend/components/Pages/Page0";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/page0" element={<Page0 />} />
          <Route path="/page1" element={<Page />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
