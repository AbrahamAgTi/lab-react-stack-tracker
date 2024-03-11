import "./App.css";
import { useState } from "react";

import companiesFile from  "./companies.json"
import technologiesFile from "./technologies.json"

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

import { Routes,Route } from "react-router-dom";






function App() {

const [companies,setCompanies] = useState(companiesFile)

const [technologies,setTechnologies] = useState(technologiesFile)


  return (
    <div className="App">

    <Navbar/>
  <Routes>
    <Route path="/" element ={<HomePage companies={companies}/>}></Route>
    <Route path="/company/:companySlug" element ={<CompanyPage companies={companies}/>}></Route>
    <Route path="/tech/:slug" element ={<TechnologyPage technologies={technologies} />}></Route>
    
    
  </Routes>

    </div>
  );
}

export default App;
