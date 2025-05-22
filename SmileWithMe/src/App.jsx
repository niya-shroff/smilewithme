import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import Poetry from './pages/Poetry';
import Mixes from './pages/Mixes';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import React from "react";

function App() {
    return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/poetry" element={<Poetry />} />
                <Route path="/mixes" element={<Mixes />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;