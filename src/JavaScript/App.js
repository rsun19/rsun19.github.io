import Navbar from '../components/Navbar.jsx';
import Home from './Home.tsx';
import { Routes, Route } from "react-router-dom";
import Portfolio from './Portfolio.jsx';

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Portfolio />} /> */}
        </Routes>
    </div>
  );
}

export default App;
