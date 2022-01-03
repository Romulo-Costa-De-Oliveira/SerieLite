import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import Header from "./components/header/Header";
import News from "./pages/news/News";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavLink to="/news" className="nav-link">Lançamentos</NavLink>
        <NavLink to="/about"className="nav-link">Sobre</NavLink>
        <Routes>
          <Route path='/news' element={<News/>}/>
          <Route path='/about' element={<About />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
