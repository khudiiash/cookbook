import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import "../style/recipe.scss";

// header decoration
import img1 from '../img/1.svg'
import img2 from '../img/2.svg'
import img3 from '../img/3.svg'
import img4 from '../img/4.svg'
import img5 from '../img/5.svg'
import img6 from '../img/6.svg'
import img7 from '../img/7.svg'
// preparation decoration
import prep1 from '../img/prep1.svg'
import prep2 from '../img/prep2.svg'
import prep3 from '../img/prep3.svg'
import prep4 from '../img/prep4.svg'
import prep5 from '../img/prep5.svg'


class Recipe extends Component {
  render() {
    
    let dateProp= new Date(this.props.recipe.date)
    let date = dateProp.getMonth( ) + 1 +'.'+ dateProp.getDate( ) + '.' +dateProp.getFullYear( );
    return (
      <div className="recipe-container">
        <header className="recipe-header">
          <div className='recipe-header-decoration'>
            <img className='recipe-header-decoration-image' src={img1} alt='decoration'></img>
            <img className='recipe-header-decoration-image' src={img2} alt='decoration'></img>
            <img className='recipe-header-decoration-image' src={img3} alt='decoration'></img>
            <img className='recipe-header-decoration-image' src={img4} alt='decoration'></img>
            <img className='recipe-header-decoration-image' src={img5} alt='decoration'></img>
            <img className='recipe-header-decoration-image' src={img6} alt='decoration'></img>
            <img className='recipe-header-decoration-image' src={img7} alt='decoration'></img>
          </div>
          <div className="recipe-header-date">{date}</div>
          <label className="recipe-header-title">{this.props.recipe.title}</label>
          <div className="recipe-header-description">
            {this.props.recipe.description}
          </div>
        </header>
        <main className="recipe-main">
          <div className="recipe-main-ingredients-wrapper">
              <div className='recipe-main-ingredients'>
                <label>Ingredients</label>
                <ol className='recipe-main-ingredients-list'>
                    {this.props.recipe.ingredients.map(key => <li className='recipe-main-ingredients-list-ingridient' key={key} keyname={key}>{key}</li>)}
                </ol>
                <div className="recipe-main-ingredients-duration">
                  <Icon className='recipe-main-ingredients-duration-icon' type="clock-circle" />{this.props.recipe.duration} min
                </div>
                <div className='recipe-footer-manipulate'>
          <Link className='recipe-footer-manipulate-edit' to={"/edit/" + this.props.recipe._id} tag='button'>EDIT</Link>
          <div className='recipe-footer-manipulate-delete'>
               <a href onClick={() => {this.props.deleteRecipe(this.props.recipe._id)}}>
                  DELETE
                </a>
          </div>
         
         </div>
              </div>            
          </div>
          <div className="recipe-main-preparation-wrapper">
            <div className='recipe-main-preparation-decoration'>
              <img className='recipe-header-decoration-image' src={prep1} alt='decoration'></img>
              <img className='recipe-header-decoration-image' src={prep2} alt='decoration'></img>
              <img className='recipe-header-decoration-image' src={prep3} alt='decoration'></img>
              <img className='recipe-header-decoration-image' src={prep4} alt='decoration'></img>
              <img className='recipe-header-decoration-image' src={prep5} alt='decoration'></img>
            </div>
            <div className="recipe-main-preparation">
              <label>How To Cook</label>
             <div className='recipe-main-preparation-paragraph'>
              {this.props.recipe.preparation}
              </div>
              </div>
          </div>
        </main>
       
      </div>
    );
  }
}

export default Recipe
