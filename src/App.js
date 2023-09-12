import Navbar from './components/Navbar';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Portfolio from './Portfolio';

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
