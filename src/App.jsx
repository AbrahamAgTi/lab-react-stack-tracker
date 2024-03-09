import "./App.css";
import "./companies.json"
import "./technologies.json"
import { useState } from "react";





function App() {

  const [companies,setCompanies] = useState(companies.json)
  const [technologies,setTechnologies] = useState(technologies.json)


  return (
    <div className="App">
      
      <h1>LAB | React Stack Tracker</h1>
    </div>
  );
}

export default App;
