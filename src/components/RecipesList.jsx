import React, { Component } from 'react';

import Recipe from './Recipe'
import axios from 'axios';





export default class RecipesList extends Component {
  constructor(props) {
    super(props);

    this.deleteRecipe = this.deleteRecipe.bind(this)

    this.state = {recipes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/recipes/')
      .then(response => {
        this.setState({ recipes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteRecipe(id) {
    axios.delete('http://localhost:5000/recipes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      recipes: this.state.recipes.filter(el => el._id !== id)
    })
  }

  recipeList() {
    this.state.recipes.sort(function(a,b) {
      return new Date(b.date) - new Date(a.date)
    })
    return this.state.recipes.map(currentRecipe => {
      return <Recipe recipe={currentRecipe} deleteRecipe={this.deleteRecipe} key={currentRecipe._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>RECIPES</h3>
        { this.recipeList() }
      </div>
    )
  }
}