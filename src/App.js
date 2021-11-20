import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cats } from './components/cats/Cats';
import { Navbar } from './components/navbar/Navbar';
import { useState } from 'react';
import api from './Api'

function App() {

  const [categories, setCategories] = useState([])

  function getCategories() {
    api.get('/categories').then(data => {
      setCategories(data)
    })
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar 
           getCategories={getCategories}
           categories={categories}
          />
          <Routes>
            <Route path="/:path" element={<Cats 
                                                getCategories={getCategories} 
                                                categories={categories} 
                                                />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
