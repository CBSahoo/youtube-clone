import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Search  from './Pages/Search';
import  Watch  from './Pages/Watch';
import { Home } from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/watch/:id" element={<Watch/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
