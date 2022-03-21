import './App.css';
import React, {useState} from 'react'
import Search from './components/Search'
import Result from './components/Result'
import {
  Router
} from "react-router-dom";

function App() {

    const [SearchInfo, SetSearchInfo] = useState({
      category: "People",
      id: "",
    });


  return (
    <div className="container">
      <Search searchInfo={SearchInfo} SetSearchInfo={SetSearchInfo} />

      <Router>
        <Result path="/:category/:id" SearchInfo={SearchInfo}/>
      </Router>
    </div>
  );
}

export default App;