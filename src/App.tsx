import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SCENE_ITEMS } from './scenes';
import { SceneItem } from './common/scenes';
import InroPage from './intro'
function App() {
  return (
    <Router>
      <Header />
      <InroPage/>

          {SCENE_ITEMS.map((sceneItem: SceneItem) => (
            <Routes               
            key={sceneItem.navigationItem.route}
            >

              <Route
               element={sceneItem.sceneComponent}
              path={sceneItem.navigationItem.route}
              />
              
            </Routes>
          ))}
    </Router>
  );
}

export default App;
