import "./App.css";
import { useState } from "react";

import "./companies.json"
import "./technologies.json"

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

import { Routes,Route } from "react-router-dom";






function App() {

  //const [companies,setCompanies] = useState(companies.json)
  //const [technologies,setTechnologies] = useState(technologies.json)


  return (
    <div className="App">


  <Routes>
    <Route path="/" element ={<HomePage/>}></Route>
    <Route path="/company/:companySlug" element ={<CompanyPage/>}></Route>
    <Route path="/tech/:slug" element ={<TechnologyPage/>}></Route>
    
    
  </Routes>

    </div>
  );
}

export default App;
