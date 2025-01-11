import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Header from './ReusableComponents/Header';
import MathMinds from './Pages/MathMinds';
import Tik from './Pages/Tic';
import Afrascu from './Pages/Afrascu';
import Smartor from './Pages/Smartor';
import GoTicket from './Pages/GoTicket';
import NailBar from './Pages/NailBar';

const App = () => {
    return (
        <Router>
          {/*<Header />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/mathminds" element={<MathMinds />} />
                <Route path="/projects/+TIC" element={<Tik />} />
                <Route path='/projects/AFRASCU' element={<Afrascu />} />
                <Route path='/projects/Smartor' element={<Smartor />} />
                <Route path='/projects/GoTicket' element={<GoTicket />} />
                <Route path='/projects/DNailBar' element={<NailBar />} />
            </Routes>
        </Router>
    );
};

export default App;
