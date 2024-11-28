import './App.css';
import Home from './components/home';
import Business from './components/business';
import Personal from './components/personal';
import W_Download from './components/b_download';
import A_Download from './components/p_download';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diet from './components/Diet';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshop" element={<Business />} />
          <Route path="/assessment" element={<Personal />} />
          <Route path="/w_download" element={<W_Download />} />
          <Route path="/a_download" element={<A_Download />} />
          <Route path="/diet" element={<Diet/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
