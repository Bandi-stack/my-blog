import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FullPost from "./Components/FullPost";

function App() {
  return (
    <>
      <div className="routeCOntainer">
        <BrowserRouter>
          <Navbar />
          <div className="mainContent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tarak" element={<User />} />
              <Route path="/secret" element={<CreatePost />} />
              <Route path="/fullView/:postId" element={<FullPost />} />
              <Route path="/tarak/fullView/:postId" element={<FullPost />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
