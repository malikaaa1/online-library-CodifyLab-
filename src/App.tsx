import React from 'react';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SCENE_ITEMS } from './scenes';
import { SceneItem } from './common/scenes';
import InroPage from './intro'
import OwnBooksCard from './OwnBooksCard';
function App() {
  return (
    <BrowserRouter>
      <Header />
      
   
     
        <Routes
     
        >
           <Route path="/own/books/page" element={<OwnBooksCard />} />
           <Route path="/" element={   <InroPage />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
