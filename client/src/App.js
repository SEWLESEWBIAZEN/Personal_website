import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Index";
import CopyRight from "./components/copyright/Index";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navigation/nav";
import ContactMe from './components/contactus/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/contact-me" element={<ContactMe/>} />
        </Routes>
        <hr />
        <Footer />
        <CopyRight />
      </Router>
    </div>
  );
}

export default App;
