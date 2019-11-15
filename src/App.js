import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import RecipesList from "./components/RecipesList";
import EditRecipe from "./components/EditRecipe";
import CreateRecipe from "./components/CreateRecipe";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={RecipesList} />
      <Route path="/edit/:id" component={EditRecipe} />
      <Route path="/create" component={CreateRecipe} />
      </div>
    </Router>
  );
}

export default App;