import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { Icon } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import "../style/create-recipe.scss";

// header decoration
import img1 from "../img/1.svg";
import img2 from "../img/2.svg";
import img3 from "../img/3.svg";
import img4 from "../img/4.svg";
import img5 from "../img/5.svg";
import img6 from "../img/6.svg";
import img7 from "../img/7.svg";
// preparation decoration
import prep1 from "../img/prep1.svg";
import prep2 from "../img/prep2.svg";
import prep3 from "../img/prep3.svg";
import prep4 from "../img/prep4.svg";
import prep5 from "../img/prep5.svg";

export default class Editrecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangePreparation = this.onChangePreparation.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      title: '',
      description: '',
      ingredients: '',
      ingredientInputs: [],
      preparation: '',
      duration: 0,
      date: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/recipes/'+this.props.match.params.id)
      .then(response => {
        let ingredientInputs = [];
        for (var i=0; i<response.data.ingredients.length; i++ ) {
          ingredientInputs.push("input-"+i.toString())
        }        
        this.setState({
          
          title: response.data.title,
          description:  response.data.description,
          ingredients:  response.data.ingredients,
          ingredientInputs: ingredientInputs,
          preparation:  response.data.preparation,
          duration:  response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value
    })
  }
  onChangePreparation(e) {
    this.setState({
      preparation: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  addIngredientInput() {
    var newInput = `input-${this.state.ingredientInputs.length}`;
    this.setState(prevState => ({
      ingredientInputs: prevState.ingredientInputs.concat([newInput])
    }));
  }
  removeIngredient(input) {
    let ingredientInputs = this.state.ingredientInputs;
    ingredientInputs.pop();
    this.setState({ ingredientInputs: ingredientInputs });
  }

  onSubmit(e) {
    e.preventDefault();

    const recipe = {
        title: this.state.title,
        description: this.state.description,
        ingredients: this.state.ingredients,
        preparation: this.state.preparation,
        duration: this.state.duration,
        date: this.state.date
      }
  

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/update/' + this.props.match.params.id, recipe)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className="recipe-container">
      <form onSubmit={this.onSubmit}>
      <header className="recipe-header">
        <div className="recipe-header-decoration">
          <img
            className="recipe-header-decoration-image"
            src={img1}
            alt="decoration"
          ></img>
          <img
            className="recipe-header-decoration-image"
            src={img2}
            alt="decoration"
          ></img>
          <img
            className="recipe-header-decoration-image"
            src={img3}
            alt="decoration"
          ></img>
          <img
            className="recipe-header-decoration-image"
            src={img4}
            alt="decoration"
          ></img>
          <img
            className="recipe-header-decoration-image"
            src={img5}
            alt="decoration"
          ></img>
          <img
            className="recipe-header-decoration-image"
            src={img6}
            alt="decoration"
          ></img>
          <img
            className="recipe-header-decoration-image"
            src={img7}
            alt="decoration"
          ></img>
        </div>
        <div className="">
          <div className="form-group create-date">

            <div>
              <DatePicker
                className='create-input'
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
        </div>
        <div className="recipe-header-title">
          <div className="form-group create-title">
            <label>Title:</label>
            {" "}<input
              type="text"
              required
              className="create-input"
              value={this.state.title}
              onChange={this.onChangeTitle}
            ></input>
          </div>
        </div>
        <div className="recipe-header-description">
          <div className="form-group create-description">
            <label>Description </label>
            <textarea
              type="text"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
        </div>
      </header>
      <main className="recipe-main">
        <div className="recipe-main-ingredients-wrapper">
          <div className="recipe-main-ingredients">
            <div className="form-group create-ingredients">
              <header>
                <label>Ingredients</label>
                <Icon
                  className="plus"
                  type="plus-circle"
                  onClick={() => this.addIngredientInput()}
                />
                <Icon
                  className="minus"
                  type="minus-circle"
                  onClick={() => this.removeIngredient()}
                />
              </header>

              <div className="create-ingredients-list">
                {this.state.ingredientInputs.map(input => (
                  <div>
                    <input
                      className="create-input"
                      onChange={this.onChangeIngredients}
                      key={input}
                      keyname={input}
                      value={this.state.ingredients[parseInt(input.replace( /^\D+/g, ''))]}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="recipe-main-ingredients-duration create-duration">
              <Icon
                className="recipe-main-ingredients-duration-icon"
                type="clock-circle"
              />
              <div className="form-group">
                
                <input
                  type="text"
                  className="create-input"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                />{"min"}
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-main-preparation-wrapper create-preparation-wrapper">
          <div className="recipe-main-preparation-decoration create-preparation-decoration">
            <img
              className="recipe-header-decoration-image"
              src={prep1}
              alt="decoration"
            ></img>
            <img
              className="recipe-header-decoration-image"
              src={prep2}
              alt="decoration"
            ></img>
            <img
              className="recipe-header-decoration-image"
              src={prep3}
              alt="decoration"
            ></img>
            <img
              className="recipe-header-decoration-image"
              src={prep4}
              alt="decoration"
            ></img>
            <img
              className="recipe-header-decoration-image"
              src={prep5}
              alt="decoration"
            ></img>
          </div>
          <div className="recipe-main-preparation create-preparation">
           
            <div className="recipe-main-preparation-paragraph">
              <div className="form-group">
                <label>How To Cook</label>
                <textarea
                  type="text"
                  required
                  className="create-input"
                  value={this.state.preparation}
                  onChange={this.onChangePreparation}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
           <div className="form-group">
           <input type="submit" value="Edit Recipe" className="btn btn-primary create-recipe" />
        </div>
      </form>
    </div>
    
    )
  }
}